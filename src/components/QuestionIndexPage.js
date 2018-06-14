import React, { Component } from "react";
import { Link } from "react-router-dom";
import Field from "./Field";
import Question from "../requests/question";

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };

    // To retain `this` inside a method when its function as a callback,
    // we must bind it using the `bind` method of functions.
    // `bind` will return a new function that is a copy of the original
    // where its `this` is permanently set.
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentDidMount() {
    Question.all().then(questions => {
      console.log(questions);
      this.setState({
        questions: questions
      });
    });
  }

  deleteQuestion(event) {
    const { currentTarget } = event;
    const { questions } = this.state;

    // Any html attribute that begins with "data-" will be accessible
    // through the .dataset property on the node where the property
    // is the text that follows "data-id"
    // data-target => .dataset.target
    // data-id => .dataset.id
    const questionId = parseInt(currentTarget.dataset.id, 10);

    this.setState({
      questions: questions.filter(q => q.id !== questionId)
    });
  }

  render() {
    return (
      <main className="QuestionIndexPage">
        <h1>Questions</h1>
        <ul style={{ padding: 0, listStyle: "none" }}>
          {this.state.questions.map(question => (
            <li key={question.id}>
              <Link to={`/questions/${question.id}`}>{question.title}</Link>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button data-id={question.id} onClick={this.deleteQuestion}>
                  Delete
                </button>
                <Field name="Author" value={question.author.full_name} />
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default QuestionIndexPage;
