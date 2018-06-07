import React from 'react';

function Field(props){
  return (
    <p className="Field">
      <strong style={{
        color: "grey",
        textDecoration: "underline"
      }}>{props.name}:</strong> {props.value}
    </p>
  );
}

export default Field;
