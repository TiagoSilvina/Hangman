import { useCallback, useEffect, useState } from "react";
import "./scss/app.scss";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
import WinLoss from "./WinLoss";


function App() {

  function getWord() {
    return words[Math.floor(Math.random() * words.length)]
  }

// Variables /////////////////////////////////////////////

  const [wordToGuess, setWordToGuess] = useState((getWord )=>{
    return words[Math.floor(Math.random() * words.length)]})
  
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  
  const isLoser = incorrectLetters.length >= 7;

  const isWinner = wordToGuess.split("").every(letter=> guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter:string) =>{
    if(guessedLetters.includes(letter) || isWinner || isLoser)
      return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
    },[guessedLetters, isWinner, isLoser])


// Keyboard functionality /////////////////////////////////////////////
  useEffect(()=>{
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [/* guessedLetters */addGuessedLetter])

// Reset w/ ENTER /////////////////////////////////////////////
  useEffect(()=>{
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])


  return (
    <div className="game">
      <div className="header">
      <div className="header__title">
        Hangman
      </div>
        <WinLoss 
                win={isWinner}
                loss={isLoser} />
      <div className="header__message">
        {isWinner && "You saved your neck!"}
        {isLoser && "Justice was served"}
        <div className="header__message-restart">Click ENTER to restart</div>
      </div>
    </div>
      
        <HangmanDrawing 
                      numberOfGueses={incorrectLetters.length} />
        <HangmanWord 
                    reveal={isLoser}
                    guessedLetters = {guessedLetters}
                    wordToGuess={wordToGuess} />
      <div className="keyboard-container">
        <Keyboard 
                  disabled={isWinner || isLoser}
                  activeLetters = {guessedLetters.filter(letter => wordToGuess.includes(letter))}
                  inactiveLetters ={incorrectLetters}
                  addGuessedLetter={addGuessedLetter}/>
      </div>
      </div>
      )
    }

export default App
 