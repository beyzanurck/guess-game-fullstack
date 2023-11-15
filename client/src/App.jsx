import './App.css'
import Board from './Board'
import PlayerList from './PlayerList'
import { useState, useEffect } from 'react';
import TopPlayers from './TopPlayers';


function App() {
  const [lastScore, setLastScore] = useState(0);
  const [show, setShow] = useState(false)


  const randomInt =  Math.floor(Math.random() * 101)

  function passScore (score) {
    setLastScore(score)
  }

  useEffect(() => {
    console.log(lastScore);
  }, [lastScore]);

  return (
    <div>
      <PlayerList lastScore = {lastScore}/>
      <Board random = {randomInt} getScore = {passScore}/>

      <button onClick={()=> setShow(true)}>Show Tops</button>

      {
        show &&
        <TopPlayers />
      }

    </div>
  )
}

export default App


