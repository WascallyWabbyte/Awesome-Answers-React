import React from "react";
import Field from "./Field";

// All React component names must begin with a capital letter
export default function QuestionDetails(props) {
  // When destructuring, we can set a default
  // value if the property we destructure doesn't exist.
  const { author = {} } = props;

  return (
    <div className="QuestionDetails">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <p>By {author.full_name}</p>
      <Field name="View Count" value={props.view_count} />
      <Field
        name="Created At"
        value={new Date(props.created_at).toLocaleString()}
      />
    </div>
  );
}
