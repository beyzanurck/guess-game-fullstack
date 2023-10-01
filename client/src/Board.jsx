import React from 'react'
import { useState } from 'react'


export default function Board(props) {
 
    const [keepGame, setKeepGame] = useState(true)
    const [guess, setGuess] = useState('')
    const [message, setMessage] = useState('')
    const [animation, setAnimation] = useState(true)
    const [score, setScore] = useState(100)

    const handleChange = (event) => {
        setGuess(event.target.value)

        setAnimation(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const guessNumber = parseInt(guess, 10)

        if(guessNumber === props.random){
            setMessage("Congratulations! You guessed correctly!")
            setKeepGame(false)

            props.getScore(score)
        }
        else if (guessNumber < props.random) {
            setMessage("Try a higher number.")
            setScore(score - 10);
        }
        else {
            setMessage("Try a lower number.")
            setScore(score - 10);
        }

        setAnimation(false)
    }
    
    const reset = () => {
        setKeepGame(true);
        setMessage('');
        setGuess('');
        setAnimation(true)
    }

    if(!keepGame){
        return(
            <div>
                <p>Congratulations! You guessed the number.</p>
                <button onClick={reset}>Play Again</button>
            </div>
        )
    }

   
  
  return (
    <div>
        {animation ? (
            <div className="lds-dual-ring"></div>) 
            : (<div className="circle"></div>)
        }

      <p>Guess a number between 0-100.</p>

      <form id="form" onSubmit={handleSubmit}>
        <input
            type='number'
            id='user-guess'
            name='user-guess'
            placeholder='guess here'
            onChange={handleChange} //calls whenever the input value changes.
        />
        <button id="button" type="submit">Click</button>
      </form>

      <p>{message}</p>
      <p></p>
      <p>Your Score: { score }</p>

    </div>
  )
}
