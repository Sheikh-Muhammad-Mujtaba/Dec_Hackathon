"use client";

import { useUser } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Order {
  orderId: string;
  customerId: string;
  products: {
    id: string;
    name: string;
    price: number;
    image: string;
    color: string[];
    size: string[];
    quantity: number;
  }[];
  status: "Pending" | "Processing" | "Delivered" | "Cancelled";
  createdAt: string;
}

export default function DashboardPage() {
  const { user } = useUser();
  const { toast } = useToast();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleUserData = async () => {
      if (!user) return;

      try {
        const { id, emailAddresses, firstName, lastName } = user;
        const email = emailAddresses[0]?.emailAddress || "No Email";

        const response = await fetch("/api/customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            email,
            name: `${firstName || ""} ${lastName || ""}`,
          }),
        });

        const result = await response.json();

        toast({
          title: result.status === "existing" ? "Welcome Back!" : "Welcome!",
          description: result.status === "existing"
            ? "You have successfully signed in."
            : "Your account has been created successfully.",
        });
      } catch (err) {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    };

    handleUserData();
  }, [user, toast]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const response = await fetch(`/api/orders?customerId=${user.id}`);
        if (!response.ok) throw new Error("Failed to fetch orders");

        const data = (await response.json()) as Order[];
        setOrders(data);
      } catch (err: any) {
        setError(err.message || "Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (loading) {
    return (
      <div className="p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <Skeleton height={150} />
          </div>
          <div>
            <Skeleton height={150} />
          </div>
          <div>
            <Skeleton height={150} />
          </div>
        </div>

        <div className="mt-6">
          <Skeleton height={40} width="60%" />
          <div className="space-y-4 mt-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border rounded-lg">
                <Skeleton height={64} width={64} />
                <div className="flex-1">
                  <Skeleton height={20} width="80%" />
                  <Skeleton height={16} width="50%" className="mt-2" />
                </div>
                <Skeleton height={20} width={80} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center mt-8 text-red-500">{error}</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button><Link href={'/category'}>New Order</Link></Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Total Orders</CardTitle>
              <CardDescription>Your lifetime orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{orders.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Active Orders</CardTitle>
              <CardDescription>Currently processing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {orders.filter((order) => order.status === "Pending").length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Total Spent</CardTitle>
              <CardDescription>Lifetime spending</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${orders
                  .reduce(
                    (total, order) =>
                      total +
                      (order.products || []).reduce(
                        (sum, product) => sum + product.price * product.quantity,
                        0
                      ),
                    0
                  )
                  .toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Track your recent order status</CardDescription>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <p className="text-gray-500">You have no recent orders.</p>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.orderId}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16">
                        <img
                          src={order.products?.[0]?.image || "/placeholder.svg"}
                          alt={order.products?.[0]?.name || "Product"}
                          className="rounded-md"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{order.products?.[0]?.name || "N/A"}</div>
                        <div className="text-sm text-gray-500">Order #{order.orderId}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-semibold">
                          ${order.products?.reduce(
                            (sum, product) => sum + product.price * product.quantity,
                            0
                          )}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <Badge
                        variant={
                          order.status === "Delivered"
                            ? "default"
                            : order.status === "Pending"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
