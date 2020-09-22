import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import ExpenseDashboardPage from '../components/pages/ExpenseDashboardPage';
import AddExpensePage from '../components/pages/AddExpensePage';
import EditExpensePage from '../components/pages/EditExpensePage';
import HelpPage from '../components/pages/HelpPage';
import NotFoundPage from '../components/pages/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="routerWrapper">
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/add" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
