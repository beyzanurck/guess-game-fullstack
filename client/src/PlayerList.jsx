import React, { useState, useEffect } from 'react';

export default function PlayerList({lastScore}) {
    const [player, setPlayer] = useState([]);

    const getPlayers = async () => {
        try {
            const response = await fetch('http://localhost:1212');
            const data = await response.json();
            setPlayer(data);
        } catch (error) {
            console.error('Failed to fetch players', error);
        }
    };


    const editScore = async () => {

        const lastPlayerIndex = player.length - 1;
        
        try {
            if (player.length === 0) {
                console.log('Player data is not loaded yet.');
                return;
            }
    
            
            const updatedPlayer = {
                ...player[lastPlayerIndex], 
                score: lastScore 
            };
    
            const response = await fetch(`http://localhost:1212/${player[lastPlayerIndex].id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedPlayer)  
            });
    
            if (response.ok) {
                console.log('Score updated successfully');
                getPlayers();  
            } else {
                console.error('Failed to update the score');
            }
    
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getPlayers();
    }, []);

    useEffect(() => {
        if (lastScore > 0) { 
            editScore();
        }
    }, [lastScore]);

    return (
        <div className='list-of-player'>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Nickname</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {player.map((p, index) => (
                        <tr key={index}>
                            <td>{p.nickname}</td>
                            <td>{p.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

