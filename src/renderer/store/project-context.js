import React, { useState, useEffect, useCallback, useContext } from 'react';
import { encode, decode, Base64 } from 'js-base64';
import axios from 'axios';
import AuthContext from './auth-context';
const ProjectContext = React.createContext({
  projects: [],
});

async function fetchProjects() {
  const authCtx = useContext(AuthContext);

  const token = authCtx.token;

  const BASE_URL = 'http://localhost/redmine';
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Redmine-API-Key': token,
    },
  };
  const { data } = await axios.get(`${BASE_URL}/projects.json`, config);

  const transformedProjects = data.projects.map((project) => {
    return {
      id: project.id,
      name: project.name,
      description: project.description,
      status: project.status,
      is_public: project.is_public,
      created_on: project.created_on,
    };
  });
  return transformedProjects;
}
export const ProjectContextProvider = (props) => {
  const project = fetchProjects();

  const [projects, setProjects] = useState(project);

  const contextValue = {
    projects,
  };

  return (
    <ProjectContext.Provider value={contextValue}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
