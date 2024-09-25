// import Image from 'next/image'
// import Link from 'next/link'
// import ProductCard from './components/ProductCard'
// import { authOptions } from './api/auth/[...nextauth]/route'
// import { getServerSession } from 'next-auth'

// export default async function Home() {
//   const session = await getServerSession(authOptions)
//   return (
//     <main>
//       <h2>Hello {session && <span><strong>{session.user!.email}</strong></span>}</h2>
//       <Link href="/users">UsersPage</Link>
//       <ProductCard/>
//     </main>
//   )
// }

import Image from "next/image"
import pic1 from "@/public/images/1659778541335.jpg"
import { Metadata } from "next"

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src="https://bit.ly/react-cover"
        alt="Pic1" 
        // width={400} 
        // height={200}
        fill 
        // style={{ objectFit: 'cover'}}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw 33vw"
        quality={75}
        priority/>
    </main>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch('')

  return{ 
    title: 'product.title',
    description: 'product.description',
  }
}