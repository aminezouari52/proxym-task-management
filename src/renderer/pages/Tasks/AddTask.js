import React, { useContext, useEffect, useState, useRef } from 'react';

import Card from '../../components/UI/Card';
import classes from './AddTask.module.scss';
import Button from '../../components/UI/Button';
import ProjectContext from 'renderer/store/project-context';
import TrackerContext from 'renderer/store/tracker-context';
import AuthContext from 'renderer/store/auth-context';
import axios from 'axios';

const AddTask = (props) => {
  const [formProject, setFormProject] = useState(0);
  const [formTracker, setFormTracker] = useState(0);
  const subjectRef = useRef();
  // const [tracker, setTracker] = useState('');
  const authCtx = useContext(AuthContext);
  const projectCtx = useContext(ProjectContext);
  const trackerCtx = useContext(TrackerContext);
  const [addTask, setAddTask] = useState(false);
  const [project, setProject] = useState([]);
  const [tracker, setTracker] = useState([]);

  useEffect(() => {
    projectCtx.projects.then((event) => {
      setProject(event);
    });
  }, []);

  useEffect(() => {
    trackerCtx.Trackers.then((event) => {
      setTracker(event);
    });
  }, []);

  const addTaskHandler = () => {
    setAddTask(true);
  };

  async function fetchTask(task) {
    const token = authCtx.token;

    const BASE_URL = 'http://localhost/redmine';
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': token,
      },
    };
    const { data } = await axios.post(`${BASE_URL}/issues.json`, task, config);
    console.log(data);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const task = {
      issue: {
        project_id: formProject,
        // tracker_id: formTracker,
        subject: subjectRef.current.value,
      },
    };
    fetchTask(task);
    setAddTask(false);
  };

  const trackerHandler = (event) => {
    setFormTracker(event.target.value);
    console.log(formTracker);
  };

  const projectHandler = (event) => {
    setFormProject(event.target.value);
  };

  return (
    <>
      {!addTask && (
        <div className={classes.add} onClick={addTaskHandler}>
          <div className={classes['add-icon']}>+</div>
          <div>New Task</div>
        </div>
      )}

      {addTask && (
        <div className={classes.form}>
          <h3>New Task</h3>
          <form onSubmit={onSubmitHandler}>
            <div className={classes.block}>
              <label>Tracker</label>
              <select onChange={trackerHandler}>
                {tracker.map((trackers) => (
                  <option key={Math.random().toString()} value={trackers.id}>
                    {trackers.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={classes.block}>
              <label>Project</label>
              <select onChange={projectHandler}>
                {project.map((projects) => (
                  <option key={Math.random().toString()} value={projects.id}>
                    {projects.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={classes.block}>
              <label>Subject</label>
              <input type="textarea" ref={subjectRef} />
            </div>

            <div className={classes.block}>
              <label>Status</label>
              <select>
                <option>New</option>
              </select>
            </div>

            <div className={classes.block}>
              <label>Priority</label>
              <select>
                {/* {ctxTracker.map(tracker => {
                  <option>{tracker.value}</option>
                })} */}
                <option>low</option>
                <option>normal</option>
                <option>high</option>
                <option>urgent</option>
              </select>
            </div>
            <Button type="submit" className={classes.button}>
              Create
            </Button>

            <Button
              type="button"
              className={classes.close}
              onClick={() => setAddTask(false)}
            >
              Cancel
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddTask;
