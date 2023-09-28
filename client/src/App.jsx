import './App.css'
import Guess from './Guess'


function App() {
  const randomInt =  Math.floor(Math.random() * 101)
  return (
    <>
      <Guess random = {randomInt} />
    </>
  )
}

export default App


