import React from 'react';
import AnswersEntry from './Q&AnswersEntry.jsx';


const QuestionsList = (props) => {
  return (
    <div>hey</div>
  )
}


export default QuestionsList;

// {this.props.displayedQuestions.map((question, key) => {
//   return (
//     <>
//     <h1> Q: {question.question_body}</h1>
//     <h4> helpful? <button onClick={() => {this.onHelpfulClick(question.question_id)}}>YES</button>{indQuestion.question_helpfulness} || <button onClick={() => {this.handleReportButtonClick(question.question_id)}}>{reportButtonText}</button></h4>
//     <AnswersEntry answer={question.answers}
//     updateAnswerReport={this.props.updateAnswerReport}
//     updateAnswerHelpfulness={this.props.updateAnswerHelpfulness}/>
//     <button onClick={() => {this.showAddAnswerModal()}}>Add Answer</button>
//     </>
//   )
// {this.state.displayedQuestions?.length > 2 &&
//   <>
//   <ButtonStyles>
//     <button onClick={this.showNextQuestions}>More Answered Questions</button>
//     <button onClick={this.showQuestionModal}>Add Question</    button>
//   </ButtonStyles>
//   { this.state.showQuestionModal &&
//   <AddQuestion updateQuestions={this.props.updateQuestions}showNextQuestions={this.showNextQuestions}displayedQuestions={this.state.displayedQuestions} getQuestions={this.props.getQuestions}
//   product_id={this.props.product_id}
//   show={this.showQuestionModal}/>}
//   </>}
// })}