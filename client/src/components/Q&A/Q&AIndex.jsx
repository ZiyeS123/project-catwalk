// Q&A
import React from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import QASearchBar from './QASearchBar.jsx';
import _ from 'lodash';


class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: this.props.productId,
      questions: [],
      answers: [],
      displayedQuestions: [],
      questionIndex: 0,
      searchedTerm: ''
    }
    this.getQandAs = this.getQandAs.bind(this);
    this.updateQuestionHelpfulness = this.updateQuestionHelpfulness.bind(this);
    this.updateQuestionReport = this.updateQuestionReport.bind(this);
    this.showNextQuestions = this.showNextQuestions.bind(this);
    this.handleSearchBarInput = this.handleSearchBarInput.bind(this);
  }

  componentDidMount() {
    this.getQandAs();
    this.showNextQuestions()
  }

  getQandAs() {
    const product_id = this.state.product_id;
    const count = 10;
    axios.get('/qa/questions', { params: { product_id, count } })
    .then((questions) => {
      this.setState({questions: questions.data.results,
      displayedQuestions: questions.data.results.slice(0, 4)}, () => {
        console.log('inside GetQAndA', this.state.displayedQuestions)
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }

  updateQuestionHelpfulness() {

  }

  updateQuestionReport() {

  }

  showNextQuestions () {
    let displayedQuestions = this.state.displayedQuestions;
    let indexDisplayed = this.state.questionIndex;
    let questions = this.state.questions;
    for (let i = indexDisplayed; i <= indexDisplayed + 3; i++) {
      if (!questions[i]) {
        break;
      }
      if (displayedQuestions.length < questions.length) {
        displayedQuestions.push(questions[i]);
      }
    }
    this.setState({
      questionIndex: this.state.questionIndex + 4,
      displayedQuestions: displayedQuestions
    })
  }

  handleSearchBarInput(searchTerm) {
  this.setState({ searchedTerm: searchTerm,
                 displayedQuestions: this.state.questions
                 })
  }




  render() {
    return(
    <div>
      {this.state.displayedQuestions.length &&
      <>
      <QASearchBar
      handleSearchBarInput={this.handleSearchBarInput}/>
      <QuestionList
      questions={this.state.displayedQuestions}
      searchedTerm={this.state.searchedTerm}
      updateQuestionHelpfulness={this.updateQuestionHelpfulness}/>
      <button onClick={this.showNextQuestions}>Show more Questions</button>
      </>
      }
    </div>
    )
  }
}


// class QuestionsAndAnswers extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product_id: 40002,
//       questions: [],
//       searchedTerm: ""
//     }
//     this.getQuestions = this.getQuestions.bind(this);
//     this.updateQuestions = this.updateQuestions.bind(this);
//     this.updateHelpfulness = this.updateHelpfulness.bind(this);
//     this.updateQuestionReport = this.updateQuestionReport.bind(this);
//     this.updateAnswerReport = this.updateAnswerReport.bind(this);
//     this.handleSearchBarInput = this.handleSearchBarInput.bind(this);
//   }

//   componentDidMount() {
//     this.getQuestions();
//   }

//   getQuestions() {
//     const product_id = this.state.product_id;
//     const count = 10;
//     axios.get('/qa/questions', { params: { product_id, count } })
//     .then((questions) => {
//       this.setState({questions: questions.data.results})
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//   }

//   updateQuestions() {
//     this.getQuestions();
//   }

//   updateHelpfulness(question_id) {

//     const updateHelpfulnessInnerFunc = () => {

//       let alreadyCalled = false;

//       if (!alreadyCalled) {
//         const updatedQuestions = (this.state.questions.map((question => {
//           if (question.question_id === question_id) {
//             question.question_helpfulness += 1
//           }
//           return question
//         })))
//         this.setState({
//           questions: updatedQuestions
//         })
//         alreadyCalled = true;
//       }
//     }
//     updateHelpfulnessInnerFunc()
//     // const updatedQuestions = _.once(this.state.questions.map((question => {
//     //   if (question.question_id === question_id) {
//     //     question.question_helpfulness += 1
//     //   }
//     //   return question
//     // })))
//     // this.setState({
//     //   questions: updatedQuestions
//     // })
//   }

//   updateQuestionReport(question_id) {
//     axios.put(`/qa/questions/${question_id}/report`)
//     .then((res) => {
//       res.sendStatus(200)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//   }

//   updateAnswerReport(answer_id) {
//     axios.put(`/qa/answers/${answer_id}/report`)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//   }

//   handleSearchBarInput(searchTerm) {
//     this.setState({searchedTerm: searchTerm})
//   }

//   renderSearchResults() {

//   }

//   render() {
//     console.log(this.state)
//     return (
//       <div>
//       {this.state.questions.length &&
//        <>
//       <QASearchBar
//       questions={this.state.questions}
//       handleSearchBarInput={this.handleSearchBarInput}/>
//       <QuestionEntry
//       updateQuestions={this.updateQuestions}
//       searchedTerm={this.state.input}
//       searchInput={this.state.searchInput}
//       getQuestions={this.getQuestions}
//       product_id={this.state.product_id}
//       questions={this.state.questions}
//       updateHelpfulness={this.updateHelpfulness}
//       updateQuestionReport={this.updateQuestionReport}
//       updateAnswerReport={this.updateAnswerReport}
//       />
//       </>}
//     </div>
//     )
//   }
// }

export default QuestionsAndAnswers;