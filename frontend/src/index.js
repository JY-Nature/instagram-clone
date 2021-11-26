import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage, LoginPage, SignUpPage, InboxPage, ExplorePage, ProfilePage } from './pages';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/accounts/login" component={LoginPage} />
        <Route path="/accounts/emailsignup" component={SignUpPage} />
        <Route path="/direct/inbox" component={InboxPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/:username" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
