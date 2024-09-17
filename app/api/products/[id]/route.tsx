import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    const res = await prisma.products.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })
    if (!res) {
        return NextResponse.json({ error: "Product does not exist" }, { status: 404 });
    }

    return NextResponse.json(res)
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    const body = await request.json();
    const validator = schema.safeParse(body);
    if (!validator.success) {
        return NextResponse.json(validator.error.errors.map(error => error.message), { status: 400 });
    }

    const res = await prisma.products.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!res) {
        return NextResponse.json({ error: "Product does not exist" }, { status: 404 });
    }

    const finalres = await prisma.products.update({
        where: {
            id: res.id
        },
        data: {
            name: body.name,
            price: body.price
        }
    })

    return NextResponse.json(finalres);
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }) {

    const res = await prisma.products.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })
    if (!res) {
        return NextResponse.json({ error: "Product does not exist" }, { status: 404 });
    }

    prisma.products.delete({
        where: {
            id: res.id
        }
    })
    return NextResponse.json({ message: "Product deleted successfully" })
}