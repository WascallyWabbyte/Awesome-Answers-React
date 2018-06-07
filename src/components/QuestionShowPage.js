// In the following import, the first import is exported by default
// by the React package. The second import within braces is called
// a named import and was exported without the "default" keyword by the "react" package.

import React, { Component } from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import detailedQuestion from "../data/detailedQuestion";

class QuestionShowPage extends Component {
  constructor(props){
    // When using a constructor in a class based component,
    // you must called 'super()' with props to allow React to
    // properly initialize your component.
    super(props);
    this.state = {
      question: detailedQuestion
    };
  }

  render(){
    return (
      <main className="QuestionShowPage">
        <QuestionDetails {...this.state.question} />
        <AnswerList answers={this.state.question.answers} />
      </main>
    );
  }
}

export default QuestionShowPage;
