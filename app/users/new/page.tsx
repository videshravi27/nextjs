'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const NewPage = () => {
  const router = useRouter();

  return (
    <>
      <div>Newpage</div>
      <button className='btn btn-primary'
        onClick={() => router.push('/users')}>Create</button>
    </>
  )
}

export default NewPage
