import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 5, name: "Vid" },
        { id: 6, name: "esh" },
    ]);
}

export async function POST(request: NextRequest) {
    const data = await request.json();
    const validator = schema.safeParse(data);
    if (!validator.success) {
        return NextResponse.json(validator.error.errors, { status: 400 })
    }
    return NextResponse.json({ id: 1, name: data.name }, { status: 201 })
}