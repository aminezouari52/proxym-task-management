import React, { useState, useEffect, useCallback, useContext } from 'react';
import { encode, decode, Base64 } from 'js-base64';
import axios from 'axios';
import AuthContext from './auth-context';
const TrackerContext = React.createContext({
  Trackers: [],
});

async function fetchTrackers() {
  const authCtx = useContext(AuthContext);

  const token = authCtx.token;

  const BASE_URL = 'http://localhost/redmine';
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Redmine-API-Key': token,
    },
  };
  const { data } = await axios.get(`${BASE_URL}/trackers.json`, config);

  const transformedTrackers = data.trackers.map((tracker) => {
    return {
      id: tracker.id,
      name: tracker.name,
    };
  });
  return transformedTrackers;
}
export const TrackerContextProvider = (props) => {
  const tracker = fetchTrackers();

  const [Trackers, setTrackers] = useState(tracker);

  const contextValue = {
    Trackers,
  };

  return (
    <TrackerContext.Provider value={contextValue}>
      {props.children}
    </TrackerContext.Provider>
  );
};

export default TrackerContext;
