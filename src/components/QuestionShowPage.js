// In the following import, the first import is export as a default
// by the "react" package. The second import within braces {} is called a named
// import and was exported without the "default" keyword by the "react" package.
import React, { Component } from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import AnswerForm from "./AnswerForm";
import Question from "../requests/question";

class QuestionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based component,
    // you must call super with props to allow React to properly
    // initialize your component.
    super(props);

    this.state = {
      loading: true,
      question: null
    };

    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.createAnswer = this.createAnswer.bind(this);
  }

  componentDidMount() {
    // Any component rendered by <Route /> will be passed three
    // props: history, location and match.
    // Use match to the current URL params.
    const questionId = this.props.match.params.id;

    Question.one(questionId).then(question => {
      this.setState({
        question: question,
        loading: false
      });
    });
  }

  deleteQuestion() {
    this.setState({
      question: null
    });
  }

  deleteAnswer(id) {
    const { question } = this.state;

    this.setState({
      question: {
        ...question,
        answers: question.answers.filter(a => a.id !== id)
      }
    });
  }

  createAnswer(answerParams) {
    const { question } = this.state;

    this.setState({
      question: {
        ...question,
        answers: [answerParams, ...question.answers]
      }
    });
  }

  render() {
    const { question, loading } = this.state;

    if (loading) {
      return (
        <main className="QuestionShowPage">
          <h2>Loading...</h2>
        </main>
      );
    }

    if (question === null) {
      return (
        <main className="QuestionShowPage">
          <h2>Question doesn't exist!</h2>
        </main>
      );
    }

    return (
      <main className="QuestionShowPage">
        <QuestionDetails {...question} />
        <button onClick={this.deleteQuestion}>Delete</button>
        <h2>Answers</h2>
        <AnswerForm onSubmit={this.createAnswer} />
        <AnswerList
          onAnswerDeleteClick={this.deleteAnswer}
          answers={question.answers}
        />
      </main>
    );
  }
}

export default QuestionShowPage;
