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

  //Each taxon has information in a JSON object in the API, referred to here as a question. Get the questions and other data from the API.
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

  //Set the app to fetch all this once the component has loaded.
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
    this.hideFamily()
  }

  revealFamily(){
    const family = document.getElementById('family-component')
    family.style.display = "block"
  }

  hideFamily(){
    const family = document.getElementById('family-component')
    family.style.display="none"
  }

  render(){
    return(
      <div id="question-container">
        <p>Key</p>

        <Question 
          question ={this.state.currentQuestionObject.question}
          answer={this.state.currentQuestionObject.answer}
          otherText={this.state.currentQuestionObject.othertext}
          answerButtonClick={this.revealFamily}
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