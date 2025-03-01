import { NextRequest, NextResponse } from 'next/server';
import { FoodEntry } from '../../types';
import { mockFoodEntries } from '@/app/mockData';

// GET all food entries
export async function GET(request: NextRequest) {
    return NextResponse.json(mockFoodEntries);
}

// POST a new food entry
export async function POST(req: Request) {
    const newEntry: FoodEntry = await req.json();
    mockFoodEntries.push(newEntry);
    return NextResponse.json(newEntry, { status: 201 });
}
