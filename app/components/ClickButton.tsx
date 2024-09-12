'use client';
import React from 'react'

const ClickButton = () => {
    return (
        <div>
            <button className='btn btn-primary' onClick={() => console.log("Clicked")}>Click </button>
        </div>

    )
}

export default ClickButton
