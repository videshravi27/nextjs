import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import bcrypt from 'bcrypt'
import schema from './schema'

export async function POST(request: NextRequest) {
    const body = await request.json()

    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }

    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    if (user) {
        return NextResponse.json({ error: 'Email already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(body.password, 10)

    const newuser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            hashedPassword: hashedPassword
        }
    })

    return NextResponse.json({ name: newuser.name, email: newuser.email, message: 'User created successfully' })
}