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
        <Route path="/dev/dev">
          <Dev />
        </Route>

        <Route path="/dev/projects">
          <Projects />
        </Route>

        <Route path="/dev/users">
          <Users />
        </Route>
      </Switch>
    </>
  );
};

export default Home;
