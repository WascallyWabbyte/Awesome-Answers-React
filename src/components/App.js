import React from 'react';
import QuestionShowPage from './QuestionShowPage';
import QuestionIndexPage from './QuestionIndexPage';
import Clock from './Clock'

function App(){
  return (
    <div className="App">
      <Clock />
      <QuestionIndexPage />
      <QuestionShowPage />
    </div>
  )
}

export default App;
