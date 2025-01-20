import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'

// POST method for handling customer data
export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      const { id, email, name } = body;
  
      if (!id || !email || !name) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
      }
  
      // Check if a customer with the given email or ID already exists
      const existingCustomer = await client.fetch(
        `*[_type == "customers" && (email == $email || Customer_id == $id)][0]`,
        { email, id }
      );
  
      if (existingCustomer) {
        // User exists, return a response indicating the user is already registered
        return NextResponse.json({ status: 'existing', customer: existingCustomer }, { status: 200 });
      }
  
      // Create a new customer
      const newCustomer = await client.create({
        _type: 'customers',
        Customer_id: id,
        user_name: name,
        email,
        Contact: '',
        address: '',
      });
  
      return NextResponse.json({ status: 'created', customer: newCustomer }, { status: 201 });
    } catch (error) {
      console.error('Error handling customer data:', error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }
