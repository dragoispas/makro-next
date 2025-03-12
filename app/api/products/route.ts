import { prisma } from '@/prisma/client';
import { NextResponse } from 'next/server';

// GET request handler to fetch products with related servingSizes and nutrients
export async function GET() {
    try {
        const products = await prisma.product.findMany({
            include: {
                servingSizes: true,  // Include all related servingSizes
                nutrients: true,     // Include the related nutrients
            }
        });
        return NextResponse.json(products); // Return the fetched products as JSON
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ message: 'Failed to fetch products' }, { status: 500 });
    }
}
