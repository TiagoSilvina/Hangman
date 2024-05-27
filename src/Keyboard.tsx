
type KeyboardProps={
  activeLetters: string[],
  inactiveLetters: string[],
  aaddGuessedLetter: (letter:string)=> void
  disbaled?: boolean,
}

function Keyboard( {activeLetters, inactiveLetters, addGuessedLetter, disabled=false }: KeyboardProps) {

  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

  return (
    <div className="keyboard">
      {KEYS.map(key =>{
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return(
          <button onClick={()=> addGuessedLetter(key)}
           className={`keyboard__key${isActive ? "-active" : isInactive ? "-inactive" : ""}`}
           disabled={isInactive || isActive || disabled }
           key={key}>
           {key}
           </button>
        )
      })}
    </div>
  )
}

export default Keyboard