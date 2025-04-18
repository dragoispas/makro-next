import { mockProducts } from "@/app/mockData";
import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: { id: number };
}
export async function GET(request: NextRequest, { params }: Props) {
    return NextResponse.json(mockProducts[params.id]);
}