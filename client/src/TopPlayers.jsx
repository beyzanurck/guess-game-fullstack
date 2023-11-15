import React, { useEffect, useState } from 'react'

export default function TopPlayers() {

    const [topPlayers, setTopPLayers] = useState([])

    const getTopPlayers = async () => {
        try {
            const response = await fetch('http://localhost:1212/top-players');
            const data = await response.json();
            setTopPLayers(data);
        } catch (error) {
            console.error('Failed to fetch players', error);
        }
    };

    useEffect(() => {
        getTopPlayers()
        console.log(topPlayers)
    }, [])
  return (
    <div>

        {
            topPlayers.length > 0 ? 
            topPlayers.map((item, index) => (
            <p key={index}> {item.nickname} - {item.score} </p>
          )) : ` `
        }
     
    </div>
  )
}
