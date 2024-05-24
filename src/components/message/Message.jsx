import React, { useEffect } from 'react'
import { useState } from 'react'
import './Message.css'

const Message = ({ errorMessage,duration}) => {
    const [prevError, setPrevError] = useState("")

    console.log("error=====",errorMessage)

    useEffect(() => {
        setTimeout(() => {
            setPrevError(errorMessage)
        }, duration);

    }, [errorMessage!==prevError])

    return (
        <div>
            { !prevError?<span className='error-message'>{errorMessage}</span>:null}
        </div>
    )
}

export default Message
