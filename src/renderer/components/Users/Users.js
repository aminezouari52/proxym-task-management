import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { encode, decode, Base64 } from 'js-base64';

import User from './User';
import Card from '../UI/Card';
import classes from './Users.module.scss';
import { object } from 'prop-types';

const Users = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUsers();
    // return () => {
    //   DUMMY_USERS = [];
    // };
  }, []);

  const BASE_URL = 'http://localhost/redmine';

  async function fetchUsers() {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Base64.btoa(`${'admin'}:${'12345678'}`)}`,
      },
    };
    const { data } = await axios.get(`${BASE_URL}/users.json`, config);

    const transformedUsers = data.users.map((user) => {
      return {
        admin: user.admin,
        firstname: user.login,
        lastname: user.lastname,
        mail: user.mail,
        created: user.created_on,
      };
    });
    setUser(transformedUsers);
  }

  return (
    <div className={classes.container}>
      <h2>Users</h2>
      <ul className={classes['responsive-table']}>
        <li className={classes['table-header']}>
          <div className={`${classes.col} ${classes['col-1']}`}>Admin</div>
          <div className={`${classes.col} ${classes['col-2']}`}>First Name</div>
          <div className={`${classes.col} ${classes['col-3']}`}>Last Name</div>
          <div className={`${classes.col} ${classes['col-4']}`}>E-Mail</div>
          {/* <div className={`${classes.col} ${classes['col1']}`}>Created</div> */}
        </li>

        {user.map((users) => (
          <User key={Math.random().toString()} user={users} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
