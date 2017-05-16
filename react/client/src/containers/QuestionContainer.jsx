import React from 'react'
import ReactDOM from 'react-dom'
import Question from '../components/Question'
import Family from '../components/Family'
import Ajax from '../services/Ajax'

class QuestionContainer extends React.Component {

  constructor(props){
    super(props)
    this.setQuestionNumber = this.setQuestionNumber.bind(this)
    this.state = {
      allQs: null,
      questionNumber: 1
    }
  }

  setQuestionNumber(questionNumber){
    this.setState({questionNumber:questionNumber})
  }

  getQuestions(){
    const questionRequest = new Ajax()
    questionRequest.get("http://localhost:3001/api/questions",(err,status) => {
      if(err) {throw err}
      if(status === 200){
        console.log("All good!")
        console.log(response)
      }
    }) 
  }

  componentDidMount(){
    this.getQuestions()
  }

  render(){
    return(
      <div id="question-container">
        <p>Key</p>
        <Question question = "End of abdomen has long, slender breathing tube" answer1="Nepidae (water scorpion)" question2 = "Not as above" answer2="Go to 2"/>
      </div>
    )
  }
}

export default QuestionContainer