import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number }
}

const UserDetailPage = ({ params: { id } } : Props) => {
    if(id>10) notFound();
    return (
        <h2>UserID {id}</h2>
    )
}

export default UserDetailPage