'use client';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const { status, data: session } = useSession()
    return (
        <>
            <header className='p-5 bg-black text-white flex flex-row gap-10'>
                <span><Link href="/">Next.js</Link></span>
                <span><Link href="/users">User Page</Link></span>
                <span><Link href="/api">Api Page</Link></span>
                <span><Link href="/admin">Admin Page</Link></span>
                <span><Link href="/products">Products Page</Link></span>
                {status === 'loading' && <span>Loading...</span>}
                {status === 'unauthenticated' ?
                    (<Link href="/api/auth/signin" className='justify-end items-end'>Login</Link>) :
                    (<div className='flex gap-5'>{session?.user!.name} <Link href="/api/auth/signout">Logout</Link></div>)}
            </header>
        </>
    )
}

export default Navbar
