import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Inicio from '../pages/Inicio';
import NotFound from '../pages/NotFound';
import NewTask from '../components/NewTask';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/newTask" component={NewTask} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
