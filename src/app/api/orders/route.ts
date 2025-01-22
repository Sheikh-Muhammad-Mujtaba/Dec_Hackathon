import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid'; // For unique ID generation

// POST: Add a new order
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { customerId, products, status } = body;

    // Validate required fields
    if (!customerId || !products || !status) {
      return NextResponse.json(
        { error: 'Missing required fields: customerId, products, or status' },
        { status: 400 }
      );
    }

    // Generate a unique order ID
    const orderId = `order-${uuidv4()}`;

    // Create the order object
    const newOrder = {
      _type: 'order',
      orderId,
      customerId,
      products,
      status,
      createdAt: new Date().toISOString(),
    };

    // Add the order to Sanity
    const result = await client.create(newOrder);

    // Return success response
    return NextResponse.json(
      { message: 'Order created successfully', order: result },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// GET: Fetch orders by customerId
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const customerId = searchParams.get('customerId'); // Extract customerId from query parameters

    // Validate required parameter
    if (!customerId) {
      return NextResponse.json(
        { error: 'Missing required query parameter: customerId' },
        { status: 400 }
      );
    }

    // Fetch all orders for the given customerId
    const orders = await client.fetch(
      `*[_type == "order" && customerId == $customerId] | order(createdAt desc) {
        orderId,
        customerId,
        products[] {
          id,
          name,
          price,
          image,
          color[],
          size[],
          quantity
        },
        status,
        createdAt
      }`,
      { customerId }
    );

    // Return the orders
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
