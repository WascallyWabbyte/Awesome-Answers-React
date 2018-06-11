import React, { Component } from 'react';
import QuestionShowPage from './QuestionShowPage';
import QuestionIndexPage from './QuestionIndexPage';
import Clock from './Clock';
import Session from '../requests/session';

class App extends Component {
  componentDidMount(){
    Session.create({
      email: "js@winterfell.gov",
      password: "supersecret"
    })
  }
  render(){
    return (
      <div className="App">
        <Clock />
        <QuestionIndexPage />
        <QuestionShowPage />
      </div>
    )
  }
}

export default App;
