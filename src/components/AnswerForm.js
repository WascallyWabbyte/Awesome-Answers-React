import React from 'react';

function AnswerForm(props){
  const { onSubmit = () => {} } = props;
  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    onSubmit({
      body: formData.get('body')
    })
  }

  return (
    <form onSubmit={handleSubmit} className="AnswerForm">
      <textarea cols="40" rows="4" name="body" />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default AnswerForm;
