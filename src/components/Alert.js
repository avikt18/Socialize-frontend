import React from 'react'

function Alert({ message}) {
    //TODO: add redux state
    return (
        <div style={{
            position: 'absolute',
            background: 'white',
            borderRadius: '10px',
            padding: '1.5em'
        }}>
            {message}
        </div>
    )
}

export default Alert