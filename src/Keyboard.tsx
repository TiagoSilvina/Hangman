
type KeyboardProps={
  activeLetters: string[],
  inactiveLetters: string[],
  aaddGuessedLetter: (letter:string)=> void
  disbaled?: boolean,
}

function Keyboard( {activeLetters, inactiveLetters, addGuessedLetter, disabled=false }: KeyboardProps) {

  const KEYS = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p"]
    const KEYS2 = [
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l"]
    const KEYS3 = [
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m"]

  return (
    <div className="keyboard">
      <div className="row">
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
      <div className="row">
      {KEYS2.map(key =>{
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
      <div className="row">
      {KEYS3.map(key =>{
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
    </div>
  )
}

export default Keyboard