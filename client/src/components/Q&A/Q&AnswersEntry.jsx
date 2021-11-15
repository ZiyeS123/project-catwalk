import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import dateFormatter from '../Shared/dateformatter.js'

const initialAnswers = []

const AnswersEntry = (props) => {
  const [answers, setAnswers] = useState({answers: []});
  const [displayedAnswers, setDisplayedAnswers] = useState({displayedAnswers: []});
  const [indexDisplayed, setIndexDisplayed] = useState({indexDisplayed: 0});
  const [reportText, setReportText] = useState('Report');


  const makeAnswersState = () => {
    const apiAnswers = props.answers;
    for (var key in apiAnswers) {
      answers.answers.push(apiAnswers[key])
    }
  }

  const showNextAnswers = () => {
    let displayed = displayedAnswers.displayedAnswers;
    let index = indexDisplayed.indexDisplayed;
    let apianswers = answers.answers;
    for (let i = index; i <= index + 1; i++) {
      if (displayed.length < apianswers.length) {
        displayed.push(apianswers[i]);
      }
    }
    setDisplayedAnswers({displayedAnswers: displayed});
    setIndexDisplayed({indexDisplayed: index + 2});
  }

  const handleAnswerHelpfulnessClick = (answer_id) => {
    axios.put(`/qa/answers/${answer_id}/helpful`)
    .then((response) => {
      console.log(answers.answers);
      const updatedAnswers = answers.answers.map((answer => {
        if (answer.id === answer_id) {
          answer.helpfulness += 1
        }
        return answer
      }))
      setAnswers({answers: updatedAnswers})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // const changeReportText = (answer_id) => {
  //   axios.put(`/qa/answers/${answer_id}/report`)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  useEffect(() => {
    makeAnswersState();
    showNextAnswers();
  }, [])

  if (!displayedAnswers.displayedAnswers.length) {
    return ( null )
  }
  return(
    <div>
    {displayedAnswers.displayedAnswers.map((answer) => {
      return (
        <div key={answer.id}>
        <p>A: {answer.body}</p>
        <p>By: {answer.answerer_name}
        Date: {dateFormatter(answer.date)} |
        Helpful? {answer.helpfulness}<button onClick={handleAnswerHelpfulnessClick(answer.id)}>Yes</button>
        Report</p>
        </div>
      )
    })}
    {Object.keys(props.answers).length > 2 &&
    <button onClick={() => {showNextAnswers()}}>More Answers</button>}
    </div>
  )
}

// class AnswersEntry extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       answers: [],
//       displayedAnswers: [],
//       answerids: [],
//       indexDisplayed: 0,
//       helpfulnessClicked: false,
//       isReported: false,
//       showAnswerModal: false
//     }
//     this.handleAnswerHelpfulnessClick = this.handleAnswerHelpfulnessClick.bind(this);
//     this.handleReportButtonClick = this.handleReportButtonClick.bind(this);
//     this.showNext2Answers = this.showNext2Answers.bind(this);
//     this.makeAnswersState = this.makeAnswersState.bind(this);

//   }
//   componentDidMount() {
//     this.makeAnswersState();
//     this.showNext2Answers();
//   }

//   makeAnswersState() {
//     const answers = this.props.answer;
//     const photos = this.state.photos
//     for (var key in answers) {
//       this.state.answers.push(answers[key]);
//     }
//   }

//   showNext2Answers() {
//     let displayedAnswers = this.state.displayedAnswers;
//     let indexDisplayed = this.state.indexDisplayed;
//     let answers = this.state.answers;
//     let answerids = this.state.answerids;
//     for (let i = indexDisplayed; i <= indexDisplayed + 1; i++) {
//       if (displayedAnswers.length < answers.length) {
//         displayedAnswers.push(answers[i]);
//       }
//     }
//     this.setState({
//       indexDisplayed: this.state.indexDisplayed + 2,
//       displayedAnswers: displayedAnswers
//     })
//   }

//   handleAnswerHelpfulnessClick(answer_id) {
//     axios.put(`/qa/answers/${answer_id}/helpful`)
//     .then((res) => {
//       const updatedAnswers = this.state.answers.map((answer => {
//         if (answer.id === answer_id) {
//           answer.helpfulness += 1
//         }
//         return answer
//       }))
//       this.setState({
//         answers: updatedAnswers
//       })
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//   }


//   handleReportButtonClick(answer_id) {
//     this.props.updateAnswerReport(answer_id)
//     this.setState(PrevState => ({isReported: true}));
//   }


//   render() {
//     const reportButtonText = this.state.isReported ? "Reported" : "Report"
//     return(
//       <div>
//         <AnswersContainer>
//         {this.state.displayedAnswers.map(answer => {
//           return(
//             <>
//             <p>A:{answer.body}</p>
//             {answer.photos.length &&
//             answer.photos.map((image => {
//               return(
//                 <ImageContainer>
//                 <img src={image}/>
//                 </ImageContainer>
//               )
//             }))
//             }
//             <Words>
//             <p>By :{answer.answerer_name} date: {dateFormatter(answer.date)} | Helpful?
//             <button onClick={() => this.handleAnswerHelpfulnessClick(answer.id)}>YES({answer.helpfulness})</button> | <button onClick={() => {this.handleReportButtonClick(answer.id)}}>{reportButtonText}</button></p>
//             </Words>
//             </>
//           )
//         })}
//         {Object.keys(this.state.answers).length > 2 &&
//         <button onClick={this.showNext2Answers}>More Answers</button>}
//         </AnswersContainer>
//       </div>
//     )
//   }
// }

// const AnswersContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   // align-items: center;
//   position: relative;
// `;

// const ImageContainer = styled.li`
//   width: 159px;
//   height: 143px;
//   float: left;
//   margin-right: 10px;
//   // background-position: center-center;
//   overflow: hidden;
//   padding: 10px;
//   display: flex;
//   border: none;
// `;

// const Words = styled.div`
//   display: flex;
//   width: 500px;
//   height: 50px;
//   border: none;
//   text-align: left;
// `;

export default AnswersEntry;