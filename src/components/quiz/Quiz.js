import React, { Component } from "react"
import Data from "../../data/Data"
import QuizDisplay from "../quizDisplay/QuizDisplay"

class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {
            profilePoints : [0,0,0,0],
            quizTracker   : 0,

        }
    }

    clickHandler = answerID => {
        // This will split the answer values across the letters into an array using the split() method.
        // returns an array of values, which can be added to state using setState below
        // ex: "a0b2c1d4" will return [undefined, 0, 2, 1, 4]
        // maybe play with a different regex to allow a cleaner split. something like /(\w\d)+/?
        const regex = /(\w+)/ 
        const answer = Data[this.props.quizID]["answers"][this.state.quizTracker][answerID]
        answer.split(regex) 
        // MISSING LOGIC: USE THE ABOVE SPLIT TO ADD VALUES TO state.profilePoints. Maybe restructure into an object??
        this.setState((state, props) => {
            quizTracker: state.quizTracker + 1
        })
    }

    render() {
        // Wordyyyyy. Needs restructuring with a return keyword.
        // const currentData = Data[this.props.quizID]["answers"][this.state.quizTracker]
        // follow up down below => currentData["a1"]...["a4"]
        // or perhaps just making it const data = Data[this.props.quizID], allowing it to be reused for all portions of the render?
        <div className="Quiz" id={this.props.quizID}>
            <h1>{Data[this.props.quizID]["title"]}</h1>
            <h3>{Data[this.props.quizID]["questions"][this.state.quizTracker]}</h3>
            <QuizDisplay
                answerDisplay={Data[this.props.quizID]["answers"][this.state.quizTracker]["a1"]} 
                clickHandler={this.clickHandler("a1Value")} />
            <QuizDisplay
                answerDisplay={Data[this.props.quizID]["answers"][this.state.quizTracker]["a2"]} 
                clickHandler={this.clickHandler("a2Value")} />
            <QuizDisplay
                answerDisplay={Data[this.props.quizID]["answers"][this.state.quizTracker]["a3"]} 
                clickHandler={this.clickHandler("a3Value")} />
            <QuizDisplay
                answerDisplay={Data[this.props.quizID]["answers"][this.state.quizTracker]["a4"]} 
                clickHandler={this.clickHandler("a4Value")} />
        </div>
    }
}
export default Quiz