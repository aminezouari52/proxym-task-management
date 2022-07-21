import React, { useState, useEffect, useCallback, useContext } from 'react';
import moment from 'moment';
import { encode, decode, Base64 } from 'js-base64';
import axios from 'axios';

import AuthContext from './auth-context';
const LogContext = React.createContext({
  log: [],
});

async function fetchLogs() {
  const value = moment();
  const startDay = value.clone().startOf('week').format('YYYY-MM-DD');
  const endDay = value.clone().endOf('week').format('YYYY-MM-DD');
  const user_id = JSON.parse(localStorage.getItem('user')).id;
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
    `${BASE_URL}/time_entries.json?spent_on=><${startDay}|${endDay}&assigned_to_id=${user_id}`,
    config
  );

  const transformedLogs = data.time_entries.map((log) => {
    return {
      date: log.spent_on,
      hours: log.hours,
      user: log.user.id,
    };
  });
  return transformedLogs;
}
export const LogContextProvider = (props) => {
  const log = fetchLogs();

  const [logs, setLog] = useState(log);

  const contextValue = {
    logs,
  };

  return (
    <LogContext.Provider value={contextValue}>
      {props.children}
    </LogContext.Provider>
  );
};

export default LogContext;
