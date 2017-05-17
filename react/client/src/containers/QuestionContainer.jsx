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
      questionNumber: 0,
      currentQuestion: "-",
      currentAnswer: "-",
      currentOtherText: "-",
      currentImg: "-",
      currentInfo: "-"
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
          this.setCurrentImg()
          this.setCurrentInfo()
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

  setCurrentImg(){
    const number = this.state.questionNumber
    const questions = this.state.allQs
    const newImg = questions[number].answerimg
    this.setState({currentImg: newImg})
  }

  setCurrentInfo(){
    const number = this.state.questionNumber
    const questions = this.state.allQs
    const info = questions[number].information  
    this.setState({currentInfo:info})  
  }

  setQuestionNumber(newQuestionNumber){
    this.setState({questionNumber:newQuestionNumber}, function(){
      this.setCurrentQuestionObject()
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
          question ={this.state.currentQuestionObject.question}
          answer={this.state.currentQuestionObject.answer}
          otherText={this.state.currentQuestionObject.othertext}
          nextButtonClick={this.nextQuestion}  
        />

        <Family 
          family={this.state.currentQuestionObject.answer} 
          info={this.state.currentQuestionObject.information}
          img={this.state.currentQuestionObject.answerimg}/>
      </div>
    )
  }
}

export default QuestionContainer