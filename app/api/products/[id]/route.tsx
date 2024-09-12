import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    if (params.id > 10) {
        return NextResponse.json({ error: "id must be less than 10" }, { status: 404 });
    }

    return NextResponse.json({
        id: 1,
        name: "Chocolate"
    })
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    const body = await request.json();
    const validator = schema.safeParse(body);
    if (!validator.success) {
        return NextResponse.json(validator.error.errors.map(error => error.message), { status: 400 });
    }

    if (params.id > 10) {
        return NextResponse.json({ error: "id must be less than 10" }, { status: 404 });
    }

    return NextResponse.json({ id: 1, name: body.name, price: body.price })
}

export function DELETE(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    if (params.id > 10) {
        return NextResponse.json({ error: "id must be less than 10" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted successfully" })
}