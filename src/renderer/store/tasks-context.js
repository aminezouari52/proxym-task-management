import React, { useState, useEffect, useCallback, useContext } from 'react';
import { encode, decode, Base64 } from 'js-base64';
import axios from 'axios';
import AuthContext from './auth-context';
const TaskContext = React.createContext({
  Tasks: [],
});

async function fetchTasks() {
  const authCtx = useContext(AuthContext);

  const token = authCtx.token;

  const BASE_URL = 'http://localhost/redmine';
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Redmine-API-Key': token,
    },
  };
  const { data } = await axios.get(`${BASE_URL}/issues.json`, config);

  const transformedTasks = data.issues.map((task) => {
    return {
      //   id: task.id,
      //   name: task.name,
      //   description: task.description,
      //   status: task.status,
      //   is_public: task.is_public,
      //   created_on: task.created_on,
    };
  });
  console.log(transformedTasks);
  return transformedTasks;
}
export const TaskContextProvider = (props) => {
  const task = fetchTasks();

  const [Tasks, setTasks] = useState(task);

  const contextValue = {
    Tasks,
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
