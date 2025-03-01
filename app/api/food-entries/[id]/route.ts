import { mockFoodEntries } from "@/app/mockData";
import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: { id: number };
}

export async function GET(request: NextRequest, { params }: Props) {
    return NextResponse.json(mockFoodEntries[params.id]);
}

export async function DELETE(request: NextRequest, { params }: Props) {
    const id = Number(params.id);

    const index = mockFoodEntries.findIndex(entry => entry.id === id);
    if (index === -1) {
        return NextResponse.json({ error: "Food entry not found" }, { status: 404 });
    }

    const deletedEntry = mockFoodEntries.splice(index, 1)[0];

    return NextResponse.json({ message: "Deleted successfully", deletedEntry });
}