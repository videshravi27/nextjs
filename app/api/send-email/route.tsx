import Welcome from '@/emails/Welcome'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.EMAIL_API_KEY)

export async function POST() {
    await resend.emails.send({
        from: '',
        to: 'videshravi27@gmail.com',
        subject: '',
        react: <Welcome name="Videsh"/>
    })

    return NextResponse.json({ message: 'Email sent' })
}