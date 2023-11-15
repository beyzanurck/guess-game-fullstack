import './App.css'
import Board from './Board'
import PlayerList from './PlayerList'
import { useState, useEffect } from 'react';
import TopPlayers from './TopPlayers';
import NewPlayer from './NewPlayer';


function App() {
  const [lastScore, setLastScore] = useState(0);
  const [show, setShow] = useState(false)
  const [showNewPlayer, setShowNewPlayer] = useState(false)



  const randomInt =  Math.floor(Math.random() * 101)

  function passScore (score) {
    setLastScore(score)
  }

  useEffect(() => {
    console.log(lastScore);
  }, [lastScore]);

  function handleClose() {
    setShowNewPlayer(false)
  }

  return (
    <div>

      {/* displays player when the button is clicked */}
      <div style={{marginTop: '50px', marginBottom: '80px'}}>

        <button onClick={()=> setShowNewPlayer(true)}>New Player</button>
        {
          showNewPlayer&&
          <NewPlayer onClose={handleClose}/>
        }

      </div>

      
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


