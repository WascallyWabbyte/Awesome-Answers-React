import React from "react";
import AnswerDetails from "./AnswerDetails";

function AnswerList(props) {
  const { answers = [], onAnswerDeleteClick = () => {} } = props;

  return (
    <ul>
      {answers.map(answer => (
        <li key={answer.id}>
          {/* <AnswerDetails
            body={answer.body}
            author={{ full_name: answer.author_full_name }}
            created_at={answer.created_at}
          /> */}
          <AnswerDetails
            {...answer}
            onDeleteClick={id => onAnswerDeleteClick(id)}
            author={{ full_name: answer.author_full_name }}
          />
        </li>
      ))}
    </ul>
  );
}

export default AnswerList;
