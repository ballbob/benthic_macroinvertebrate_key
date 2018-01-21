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

  //A taxon's information becomes available to the app when it is loaded from the allQs array of taxa into the currentQuestionObject state variable.
  setCurrentQuestionObject(){
    const number = this.state.questionNumber
    const questions = this.state.allQs
    const questionObject = questions[number]
    this.setState({currentQuestionObject:questionObject})
  }

  //Which question to load is determined by the question number state variable, which tells the app which point in the array to go to.
  setQuestionNumber(newQuestionNumber){
    this.setState({questionNumber:newQuestionNumber}, function(){
      this.setCurrentQuestionObject()
    })
  }

  //Button functions 

  //The 'next' button changes 'currentQuestion' from the current point in the array to the 'next' array index, specified in the taxon's question object (button_action). This is to allow for branching when the app is expanded outside of the Hemiptera.
  nextQuestion(){
    const number = this.state.questionNumber
    const questions = this.state.allQs
    const newNumber = questions[number].button_action
    this.setQuestionNumber(newNumber)
    this.hideFamily()
  }

  //The 'answer' button reveals the taxon reference, information and illustration. Some sensitivity information is included as flavour text, but taxa are usually assessed as a group (diversity, overall sensitivity, et cetera).
  revealFamily(){
    const family = document.getElementById('family-component')
    family.style.display = "block"
  }

  //This should be reversed when we go to the next question.
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