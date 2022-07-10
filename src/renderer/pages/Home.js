import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { useContext } from 'react';

import Dev from './Dev/Dev';
import Header from '../components/UI/Header';
import Users from './Users/Users';
import Projects from './Projects/Projects';

const Home = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Dev />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </>
  );
};

export default Home;
