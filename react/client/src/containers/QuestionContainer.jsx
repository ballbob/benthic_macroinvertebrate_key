import React from 'react'
import ReactDOM from 'react-dom'
import Question from '../components/Question'
import Family from '../components/Family'
import Ajax from '../services/Ajax'

class QuestionContainer extends React.Component {

  //SETUP
  constructor(props){
    super(props)
    this.setQuestionNumber = this.setQuestionNumber.bind(this)
    this.state = {
      allQs: null,
      questionNumber: 0,
      currentQuestion: "Please wait..."
    }
  }

  fetchQuestions(){
    console.log("fetchQuestions called")
    const ajaxRequest = new Ajax()
    ajaxRequest.get("http://localhost:3001/api/questions",(err,questions,status) => {
      if(err){
        console.log("Error")
      }

      console.log(questions)

      if(status === 200){
        this.setState({allQs:questions})
        console.log(this.state.allQs)
        this.setCurrentQuestionTrait()
      }
    })
  }

  componentDidMount(){
    this.fetchQuestions()
    console.log(this.state.allQs)
  }

  //State setters: decide what the question's text, answers and images will be.
  setCurrentQuestionTrait(){
    var number = this.state.questionNumber
    var questions = this.state.allQs
    var questionText = questions[number].question
    this.setState({currentQuestion:questionText})
  }

  setQuestionNumber(questionNumber){
    this.setState({questionNumber:questionNumber})
  }

  render(){
    return(
      <div id="question-container">
        <p>Key</p>
        <Question question ={this.state.currentQuestion} answer="Nepidae (water scorpion)" otherText="Not as above" nextButton="Next"/>
      </div>
    )
  }
}

export default QuestionContainer