import React, { useState, useEffect, useCallback, useContext } from 'react';
import { encode, decode, Base64 } from 'js-base64';
import axios from 'axios';
import AuthContext from './auth-context';
const TaskContext = React.createContext({
  Tasks: [],
  filtred_tasks: [],
});

async function fetchTasks(user_id) {
  const authCtx = useContext(AuthContext);

  const token = authCtx.token;

  const BASE_URL = 'http://localhost/redmine';
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Redmine-API-Key': token,
    },
  };
  const { data } = await axios.get(
    `${BASE_URL}/issues.json${user_id ? '?assigned_to_id=' + user_id : ''}`,
    config
  );

  const transformedTasks = data.issues.map((task) => {
    return {
      id: task.id,
      project: task.project.name,
      tracker: task.tracker.name,
      subject: task.subject,
      priority: task.priority.name,
    };
  });
  return transformedTasks;
}
export const TaskContextProvider = (props) => {
  const task = fetchTasks();
  const user = JSON.parse(localStorage.getItem('user'));
  const filtred_tasks = fetchTasks(user.id);

  const [Tasks, setTasks] = useState(task);

  const contextValue = {
    Tasks,
    filtred_tasks,
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
