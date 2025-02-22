import { NextResponse } from 'next/server';
import { NoteEntry } from '../../types';
import { mockNoteEntries } from '../../mockData';

// GET all note entries
export async function GET() {
    return NextResponse.json(mockNoteEntries);
}

// POST a new note entry
export async function POST(req: Request) {
    const newEntry: NoteEntry = await req.json();
    mockNoteEntries.push(newEntry);
    return NextResponse.json(newEntry, { status: 201 });
}