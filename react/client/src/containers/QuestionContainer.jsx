import React from 'react'
import ReactDOM from 'react-dom'
import Question from '../components/Question'
import Family from '../components/Family'
import Ajax from '../services/Ajax'

class QuestionContainer extends React.Component {

  //SETUP
  constructor(props){
    super(props)
    this.state = {
      allQs: null,
      questionNumber: 0,
      currentQuestion: "-",
      currentAnswer: "-",
      currentOtherText: "-",
      currentImg: "-"
    }
    this.nextQuestion = this.nextQuestion.bind(this)
  }

  fetchQuestions(){
    const ajaxRequest = new Ajax()
    ajaxRequest.get("http://localhost:3001/api/questions",(err,questions,status) => {
      if(err){
        console.log("Error")
      }

      if(status === 200){
        this.setState({allQs:questions}, function(){
          this.setCurrentQuestionTrait()
          this.setCurrentAnswer()
          this.setCurrentOtherText()
          this.setCurrentImg()
        })
      }
    })
  }

  componentDidMount(){
    this.fetchQuestions()
  }

  //State setters: decide what the question's text, answers and images will be.
  setCurrentQuestionTrait(){
    const number = this.state.questionNumber
    const questions = this.state.allQs
    const questionText = questions[number].question
    this.setState({currentQuestion:questionText})
  }

  setCurrentAnswer(){
    const number = this.state.questionNumber
    const questions = this.state.allQs
    const answerText = questions[number].answer
    this.setState({currentAnswer: answerText})
  }

  setCurrentOtherText(){
    const number = this.state.questionNumber
    const questions = this.state.allQs
    const newOtherText = questions[number].othertext  
    this.setState({currentOtherText: newOtherText})
  }

  setCurrentImg(){
    const number = this.state.questionNumber
    const questions = this.state.allQs
    const newImg = questions[number].answerimg
    this.setState({currentImg: newImg})
  }

  setQuestionNumber(newQuestionNumber){
    console.log(newQuestionNumber)
    this.setState({questionNumber:newQuestionNumber}, function(){
      this.setCurrentQuestionTrait()
      this.setCurrentAnswer()
      this.setCurrentOtherText()
      this.setCurrentImg()
    })
  }

  nextQuestion(){
    const number = this.state.questionNumber
    const questions = this.state.allQs
    const newNumber = questions[number].button_action
    this.setQuestionNumber(newNumber)
  }

  render(){
    return(
      <div id="question-container">
        <p>Key</p>

        <Question 
          question ={this.state.currentQuestion}
          answer={this.state.currentAnswer}
          otherText={this.state.currentOtherText}
          nextButtonClick={this.nextQuestion}  
        />

        <Family 
          family={this.state.currentAnswer} 
          img={this.state.currentImg}/>
      </div>
    )
  }
}

export default QuestionContainer