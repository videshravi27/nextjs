import React, { CSSProperties } from 'react'
import { Html, Body, Container, Tailwind, Text, Link, Preview } from '@react-email/components'

const Welcome = ({ name }: { name: String }) => {
    return (
        <Html>
            <Preview>React-Email</Preview>
            <Tailwind>
                <Body className='bg-white'>
                    <Container>
                        <Text className='text-black font-extrabold'>
                            Hello {name}
                        </Text>
                        <Link href='https://youtube.com'>youtube.com</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

const body: CSSProperties = {
    background: 'white'
}
const text: CSSProperties = {
    fontSize: '20px',
    color: 'black'
}

export default Welcome
