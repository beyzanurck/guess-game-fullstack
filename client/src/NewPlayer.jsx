import React, { useState } from 'react'

export default function NewPlayer({onClose}) {

    const [nickname, setNickname] = useState("")

    function handleChange(event){
        setNickname(event.target.value);
    }
    
    const addNewPlayer = async (newPlayer) => {
        try {
            const response = await fetch("http://localhost:1212/new-player", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPlayer)
            });
            
            if (response.ok) {
                onClose(); 
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    
    
    function handleSubmit(e) {
        e.preventDefault();
        addNewPlayer({ nickname });
    }

    
    return (

        <form onSubmit={handleSubmit}> 
            <input 
                name="nickname"
                onChange={handleChange}
                value={nickname}
                placeholder="nickname"
                required
                minLength={5}
                maxLength={15}
            />

            <button>Submit</button>
        </form>
    )
}
