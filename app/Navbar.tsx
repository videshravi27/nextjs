import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className='p-5 bg-black text-white flex flex-row gap-10'>
                <span><Link href="/">Next.js</Link></span>
                <span><Link href="/users">User Page</Link></span>
                <span><Link href="/admin">Admin Page</Link></span>
                <span><Link href="/products">Products Page</Link></span>
            </header>
        </>
    )
}

export default Navbar
