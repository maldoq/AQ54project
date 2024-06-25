import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/authentication/Login';
import SignupPage from './components/authentication/SignUp';
import HomePage from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginPage/>
          </Route>
          <Route path="/signup">
            <SignupPage/>
          </Route>
          <Route path="/home">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
