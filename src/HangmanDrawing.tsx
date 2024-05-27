type HangmanDrawingProps = {
    numberOfGueses: number
}

function HangmanDrawing({numberOfGueses}: HangmanDrawingProps) {

const ROPE = (
    <div className="drawing__rope"></div>
)
const HEAD = (
    <div className="man__head">
        <div className="man__head-eyes">x x</div>
    </div>
)
const TORSO = (
    <div className="man__torso"></div>
)
const RIGHTARM = (
    <div className="man__right-arm"></div>
)
const LEFTARM = (
    <div className="man__left-arm"></div>
)
const RIGHTLEG = (
    <div className="man__right-leg"></div>
)
const LEFTLEG = (
    <div className="man__left-leg"></div>
)

const BODYPARTS = [ROPE, HEAD, TORSO, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG]

  return (
    <div className="drawing">
        {BODYPARTS.slice(0, numberOfGueses)}
        <div className="drawing__bar"></div>
        <div className="drawing__post"></div>
        <div className="drawing__base"></div>
    </div>
  )
}

export default HangmanDrawing