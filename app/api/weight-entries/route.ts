import { NextResponse } from 'next/server';
import { WeightEntry } from '../../types';
import { mockWeightEntries } from '../../mockData';

// GET all weight entries
export async function GET() {
    return NextResponse.json(mockWeightEntries);
}

// POST a new weight entry
export async function POST(req: Request) {
    const newEntry: WeightEntry = await req.json();
    mockWeightEntries.push(newEntry);
    return NextResponse.json(newEntry, { status: 201 });
}