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
      currentQuestionObject: "-",
      questionNumber: 0
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
          this.setCurrentQuestionObject()
        })
      }
    })
  }

  componentDidMount(){
    this.fetchQuestions()
  }

  //State setters: decide what the question's text, answers and images will be.
  setCurrentQuestionObject(){
    const number = this.state.questionNumber
    const questions = this.state.allQs
    const questionObject = questions[number]
    this.setState({currentQuestionObject:questionObject})
  }

  setQuestionNumber(newQuestionNumber){
    this.setState({questionNumber:newQuestionNumber}, function(){
      this.setCurrentQuestionObject()
    })
  }

  //Button functions 
  nextQuestion(){
    const number = this.state.questionNumber
    const questions = this.state.allQs
    const newNumber = questions[number].button_action
    this.setQuestionNumber(newNumber)
  }

  toggleFamily(){
    const family = document.getElementById('family-component')
    if(family.style.display === "none"){
      console.log(family.style.display)
      family.style.display = "block"
    }
  }

  render(){
    return(
      <div id="question-container">
        <p>Key</p>

        <Question 
          question ={this.state.currentQuestionObject.question}
          answer={this.state.currentQuestionObject.answer}
          otherText={this.state.currentQuestionObject.othertext}
          answerButtonClick={this.toggleFamily}
          nextButtonClick={this.nextQuestion}  
        />

        <Family 
          family={this.state.currentQuestionObject} 
        />
      </div>
    )
  }
}

export default QuestionContainer