import React from 'react';
import Router from 'react-router';
const Route = Router.Route;

import NewTask from './pages/NewTask';

export default (
  <Route path="/" handler={ NewTask } />
);
