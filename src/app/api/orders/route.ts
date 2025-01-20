import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid'; // For unique ID generation

// POST: Add a new order
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { customerId, products, status } = body;

    if (!customerId || !products || !status) {
      return NextResponse.json(
        { error: 'Missing required fields: customerId, products, or status' },
        { status: 400 }
      );
    }

    // Generate a unique order ID
    const orderId = `order-${uuidv4()}`;

    // Create order object
    const newOrder = {
      _type: 'order',
      orderId,
      customerId,
      products,
      status,
      createdAt: new Date().toISOString(),
    };

    // Add to Sanity
    const result = await client.create(newOrder);

    return NextResponse.json({ message: 'Order created successfully', order: result }, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE: Delete an order by ID
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get('orderId');

    if (!orderId) {
      return NextResponse.json({ error: 'Missing orderId in query params' }, { status: 400 });
    }

    // Delete order in Sanity
    await client.delete(orderId);

    return NextResponse.json({ message: 'Order deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting order:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
