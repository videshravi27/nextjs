import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const res = await prisma.nextjs.findMany()
    return NextResponse.json(res)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validator = schema.safeParse(body);
    if (!validator.success) {
        return NextResponse.json(validator.error.errors, { status: 400 })
    }
    const res = await prisma.nextjs.findUnique({
        where: {
            email: body.email
        }
    })
    if(res){
        return NextResponse.json({ error: "Email already exists" }, { status: 400 })
    }
    
    const finalres = await prisma.nextjs.create({
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(finalres , { status: 201 })
}