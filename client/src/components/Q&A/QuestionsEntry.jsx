import React, { useState, useEffect } from 'react';
import AnswersEntry from './Q&AnswersEntry.jsx';
import axios from 'axios';
import styled from 'styled-components';


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
            </div>
          )
        })
        }
      </div>
    )
  }
  return (
    props.questions.map((question, key) => {
      return (
        <div key={question.question_id}>
        <h4> Q: {question.question_body}
        Helpful? <button>Yes</button>
        Reported
        </h4>
        <AnswersEntry
        answers={question.answers}/>
        </div>
      )
    })
  )

}

const AccordianSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  background: rgba(200, 200, 200, 0.5)
  width: 75%
  border: solid;
  font-size: 15px;
  outline: none;
  overflow-y: scroll;
  overflox-x: scroll;
`;

export default QuestionsEntry;
