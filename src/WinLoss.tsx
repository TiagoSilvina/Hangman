import { useState, useEffect } from "react";
import bonus from '/sound/bonus.mp3';
import error from '/sound/error.mp3';

type WinLossProps={
    win: boolean
    loss: boolean
}

function WinLoss({win,loss}:WinLossProps) {

        const [wins, setWins]= useState(0)
        const [losses, setLosses]= useState(0)

        const tally1 = (
          <div className="tally1"></div>
        )
        const tally2 = (
          <div className="tally2"></div>
        )
        const tally3 = (
          <div className="tally3"></div>
        )
        const tally4 = (
          <div className="tally4"></div>
        )
        const tally5 = (
          <div className="tally5"></div>
        )
        
        const tallyMarks = [tally1, tally2, tally3, tally4, tally5]
        
        function countWins(){
            if (win) {
              setWins(wins + 1)
              const audio = new Audio(bonus);
              audio.play();
              return
            }
          }
          function countLosses(){
            if (loss) {
              setLosses(losses + 1)
              const audio = new Audio(error);
              audio.play();
              return
            }
          }
 
          useEffect(() => {
            countWins()
            countLosses()
          }, [win, loss])

  return (
    <div className="scoreboard">
        <div className="scoreboard__win">Wins: 
        <div className="tally">
        {wins <= 5 ? tallyMarks.slice(0, wins) : wins}

        </div>
        </div>
        <div className="scoreboard__loss">Losses:
        <div className="tally">
          {losses <= 5 ? tallyMarks.slice(0, losses) : losses}
        </div> 
        </div>
    </div>
  )
}

export default WinLoss