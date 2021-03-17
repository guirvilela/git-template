import React from 'react';

import { Route, Switch } from 'react-router-dom';

import allRepository from '../pages/allRepositories';
import RepositoryComponent from '../pages/repository';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={allRepository} />
    <Route path="/repository/:repository" component={RepositoryComponent} />
  </Switch>
);

export default Routes;
