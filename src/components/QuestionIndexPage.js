import React, { Component } from 'react';
import Field from './Field';
import allQuestions from '../data/allQuestions';



class QuestionIndexPage extends Component {

  constructor(props){
    // When using a constructor in a class based component,
    // you must called 'super()' with props to allow React to
    // properly initialize your component.
    super(props);
    this.state = {
      questions: [...allQuestions] // Using spread to create a copy of 'allQuestions'
    };                             // to avoid mutating it when mutating the error

    // To retain 'this' inside a method when its function is passed as a callback
    // we must bind it using the 'bind' method of functions. Once a 'this' is bound
    // to a function it can never be changed for that function again.
    // 'Bind' will return a new function that is a copy of the original where its 'this'
    // is permanently set.
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  deleteQuestion(event){
    const { currentTarget } = event;
    const { questions } = this.state;
    // Any HTML attribute that begins with 'data-' will be accessible through the
    // 'data-set' property on the node where the property is the text
    // that follows 'data-id'
    // data-target => .dataset.target
    // data-id => .dataset.id
    const questionId = parseInt(currentTarget.dataset.id, 10);
    this.setState({
      questions: questions.filter(q => q.id !== questionId)
    });
  }

  render(){
    return (
      <main className="QuestionIndexPage">QuestionShowPage
        <h1>Questions</h1>
        <ul style={{ padding: 0, listStyle: "none" }}>
        {
          this.state.questions.map(
            question => (
              <li key={question.id}>
                <a href="">{question.title}</a> <br />
                <button data-id={question.id} onClick={this.deleteQuestion}>Delete</button>
                <Field name="Author" value={question.author.full_name} />
              </li>
            ))}
        </ul>
      </main>
    );
  }
}

export default QuestionIndexPage;
