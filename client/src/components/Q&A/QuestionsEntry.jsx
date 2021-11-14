import React, { useState } from 'react';
import AnswersEntry from './Q&AnswersEntry.jsx';


const QuestionsEntry = (props) => {
  if (props.searchedTerm.length >= 3) {
    return (
      <div>
        {props.questions.filter(question => {
          if (question.question_body.toLowerCase().includes(props.searchedTerm.toLowerCase())) {
            return question;
          }
        })
        .map((filteredQ, key) => {
          return (
            <div key={filteredQ.question_id}>
            <h4> Q: {filteredQ.question_body}
            Helpful? <button>Yes</button>
            Reported
            </h4>
            <AnswersEntry
            answers={filteredQ.answers}/>
            {/* {Object.keys(filteredQ.answers).length > 2 &&
            <button onClick={handleClick(filteredQ.answers)}>More Answers</button>
            } */}
            </div>
          )
        })
        }
      </div>
    )
  }
  return(
    props.questions.map((question, key) => {
      return (
        <div key={question.question_id}>
        <h4> Q: {question.question_body}
        Helpful? <button>Yes</button>
        Reported
        </h4>
        <AnswersEntry
        answers={question.answers}/>
        {Object.keys(question.answers).length > 2 &&
        <button>More Answers</button>
        }
        </div>
      )
    })
  )
}

export default QuestionsEntry;
