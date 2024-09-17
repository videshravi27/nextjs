import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main>
      <h2>Hello {session && <span><strong>{session.user!.email}</strong></span>}</h2>
      <Link href="/users">UsersPage</Link>
      <ProductCard/>
    </main>
  )
}
