import React, { useState} from "react"
import "./EightBall.css"
const EightBall = ({answers}) => {

    const choice = (items) => items[Math.floor(Math.random() * items.length)]
    const [answer, setAnswer] = useState({msg: "Think of a Question", color: "black"})

    return (
        <div className="EightBall" onClick={ () => setAnswer(choice(answers))} style={{backgroundColor: answer.color}}>
            <p className="EightBall-text"><b>{answer.msg}</b></p>
        </div>
    )
}

export default EightBall