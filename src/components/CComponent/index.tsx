import React, { useEffect } from 'react'

export const CComponent = () => {
    useEffect(() => {
        throw new Error()
    }, [])

    return <div>C component
        <button onClick={() => { throw new Error('error caused in event listener does not trigger error boundary') }}>Trigger error C</button>
    </div>
}