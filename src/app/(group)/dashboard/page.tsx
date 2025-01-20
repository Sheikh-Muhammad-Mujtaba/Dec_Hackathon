'use client';

import { useUser } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user } = useUser();
  const { toast } = useToast();

  useEffect(() => {
    const handleUserData = async () => {
      if (user) {
        try {
          // Extract user data
          const { id, emailAddresses, firstName, lastName } = user;
          const email = emailAddresses[0]?.emailAddress;

          // Call API to handle customer data
          const response = await fetch('/api/customers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id,
              email,
              name: `${firstName} ${lastName}`,
            }),
          });

          const result = await response.json();

          if (result.status === 'existing') {
            toast({
              title: 'Welcome Back!',
              description: 'You have successfully signed in.',
            });
          } else {
            toast({
              title: 'Welcome!',
              description: 'Your account has been created successfully.',
            });
          }
        } catch (error) {
          toast({
            title: 'Error',
            description: 'Something went wrong. Please try again.',
            variant: 'destructive',
          });
        }
      }
    };

    handleUserData();
  }, [user, toast]);

  return <div>Welcome to the Dashboard!</div>;
}
