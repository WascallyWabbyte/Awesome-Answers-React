import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import QuestionShowPage from './QuestionShowPage';
import QuestionIndexPage from './QuestionIndexPage';
// import Session from '../requests/session';
import WelcomePage from './WelcomePage';
import NavBar from './NavBar';
import QuestionNewPage from './QuestionNewPage';
import SignInPage from './SignInPage';
import { Authenticator, Authenticate } from './Authenticator';


class App extends Component {

  render(){
    return (
      <Authenticator>
        <Router>
          <div className="App">
            <Authenticate>{props => <NavBar auth={props} />}</Authenticate>
            {/* <NavBar /> */}
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route
                path="/session/new"
                render={routeProps => (
                  <Authenticate>
                    {authProps => <SignInPage {...routeProps} auth={authProps} />}
                  </Authenticate>
                )}
              />
              <Route exact path="/questions" component={QuestionIndexPage} />
              <Route exact path="/questions/new" component={QuestionNewPage} />
              <Route exact path="/questions/:id" component={QuestionShowPage} />
            </Switch>
          </div>
        </Router>
      </Authenticator>
    )
  }
}

export default App;
