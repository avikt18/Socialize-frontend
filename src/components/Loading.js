import React from 'react'
import { useEffect, useState } from 'react'

function Loading() {
    const [dots, setDots] = useState('...')

    useEffect(() => {
        const interval = setInterval(() => {
            if(dots.length > 2) 
                setDots('')
            else 
                setDots(dots + ".")
        }, 500)
        return () => clearInterval(interval)
    }, [dots])

    return (
        <div className='status-message'>
            Loading
            <span>{dots}</span>
        </div>
    )
}

export default Loading