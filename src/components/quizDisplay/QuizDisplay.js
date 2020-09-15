import React from "react"

const QuizDisplay = props => {
    return (
        <div className="QuizDisplay" onClick={props.clickHander}>
            {props.answerDisplay}
        </div>
    )
}
export default QuizDisplay