import React from 'react';

import { useContext, useState } from 'react';
import ProjectContext from 'renderer/store/project-context';
import classes from './LogForm.module.scss';

const LogForm = (props) => {
  const [projects, setProjects] = useState([]);
  const proCtx = useContext(ProjectContext);
  proCtx.projects.then((e) => {
    setProjects(e);
  });

  // const generateTasks = () => {
  //   console.log(project.id);
  // };

  return (
    <>
      <h2>Select project!</h2>
      <div className={classes.projects}>
        {projects.map((project) => (
          <div
            key={Math.random().toString()}
            className={classes.project}
            onClick={() => {
              proCtx.projects.id === project.id;
              console.log(project.id);
            }}
          >
            {project.name}
          </div>
        ))}
      </div>
    </>

    // <div className={classes.form}>
    //   <h3>Spent time</h3>
    //   <form onSubmit={onSubmitHandler}>
    //     <div className={classes.block}>
    //       <label>Project</label>
    //       <input type="textarea"></input>
    //     </div>

    //     <div className={classes.block}>
    //       <label>Task</label>
    //       <input type="textarea"></input>
    //     </div>

    //     <div className={classes.block}>
    //       <label>Activity</label>
    //       <textarea type="textarea"></textarea>
    //     </div>
    //     <div className={classes.block}>
    //       <label>Date</label>
    //       <input type="date"></input>
    //     </div>
    //     <div className={classes.block}>
    //       <label>Hours</label>
    //       <input type="number" min="0" max="99"></input>
    //     </div>
    //     <Button type="submit" className={classes.button}>
    //       Create
    //     </Button>
    //     <Button
    //       type="button"
    //       className={classes.close}
    //       onClick={() => setLogTime(false)}
    //     >
    //       Cancel
    //     </Button>
    //   </form>
    // </div>
  );
};

export default LogForm;
