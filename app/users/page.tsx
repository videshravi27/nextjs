import React, { Suspense } from 'react'
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  // console.log(sortOrder);

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className='btn mb-3'>New User</Link>
      <p>{new Date().toLocaleTimeString()}</p>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UsersPage;
