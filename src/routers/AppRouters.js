import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import DashBoardExpensiveApp from '../components/DashBoardExpensive';
import AddExpensiveApp from '../components/AddExpensive';
import EditExpensePage from '../components/EditExpensive';
import HelpExpensiveApp from '../components/HelpExpensive';
import NotFoundingPage from '../components/NotFoundingPage';
import Header from '../components/Header';

const AppRouters = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashBoardExpensiveApp} exact={true} />
        <Route path="/create" component={AddExpensiveApp} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensiveApp} />
        <Route component={NotFoundingPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouters;