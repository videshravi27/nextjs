import React from 'react'

interface Props {
    params: { slug: string[] };
    searchParams: { sortOrder: String}
}

const ProductPage = ({ params: { slug }, searchParams: { sortOrder }}: Props) => {
    return (
        <h2>ProductPage {slug} {sortOrder}</h2>
    )
}

export default ProductPage
