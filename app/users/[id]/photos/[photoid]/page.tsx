import React from 'react'

interface Props {
    params: { id: number, photoid: number}
}

const PhotoDetailPage = ({ params: {id,photoid}}: Props) => {
    return (
        <h2>Photos {id} {photoid}</h2>
    )
}

export default PhotoDetailPage