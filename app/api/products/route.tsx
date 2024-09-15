import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const res = await prisma.products.findMany()
    return NextResponse.json(res);
}

export async function POST(request: NextRequest) {
    const data = await request.json();
    const validator = schema.safeParse(data);
    if (!validator.success) {
        return NextResponse.json(validator.error.errors, { status: 400 })
    }
    return NextResponse.json({ id: 1, name: data.name, price: data.price }, { status: 201 })
}