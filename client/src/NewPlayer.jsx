import React, { useState } from 'react'

export default function NewPlayer({onClose}) {

    const [nickname, setNickname] = useState("")

    function handleClose() {

    }

    
    
    return (

        <form> 
            <input 
                name="nickname"
                // onChange={handleChange}
                value={nickname}
                placeholder="nickname"
                required
                minLength={5}
                maxLength={15}
            />

            <button onClick={onClose}>Submit</button>
        </form>
    )
}
