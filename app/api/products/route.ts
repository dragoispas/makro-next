import { NextResponse } from 'next/server';
import { mockProducts } from '@/app/mockData';

// GET request handler
export async function GET() {
    return NextResponse.json(mockProducts);
}
