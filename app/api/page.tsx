import Link from 'next/link'

export default function Home() {
    return (
        <main className='flex flex-col'>
            <Link href="/api/users">User API </Link>
            <Link href="/api/products">Products API</Link>
        </main>
    )
}