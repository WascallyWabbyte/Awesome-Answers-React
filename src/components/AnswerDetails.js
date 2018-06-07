import React from "react";
import Field from "./Field";

function AnswerDetails(props) {
  return (
    <div className="AnswerDetails">
      <p>{props.body}</p>
      <p>By {props.author.full_name}</p>
      <Field
        name="Created At"
        value={new Date(props.created_at).toLocaleString()}
      />
    </div>
  );
}

export default AnswerDetails;
