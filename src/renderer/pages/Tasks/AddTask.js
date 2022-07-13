import React, { useContext, useEffect, useState, useRef } from 'react';

import Card from '../../components/UI/Card';
import classes from './AddTask.module.scss';
import Button from '../../components/UI/Button';
import ProjectContext from 'renderer/store/project-context';
import TrackerContext from 'renderer/store/tracker-context';
import AuthContext from 'renderer/store/auth-context';
import axios from 'axios';

const AddTask = (props) => {
  const [formProject, setFormProject] = useState(1);
  const [formTracker, setFormTracker] = useState(1);
  const [priority, setPriority] = useState(1);
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
        tracker_id: formTracker,
        subject: subjectRef.current.value,
        priority_id: priority,
        // assigned_to_id: 1,
      },
    };
    fetchTask(task);
    setAddTask(false);
  };

  const trackerHandler = (event) => {
    setFormTracker(event.target.value);
  };

  const projectHandler = (event) => {
    setFormProject(event.target.value);
  };

  const priorityHandler = (event) => {
    setPriority(event.target.value);
  };

  console.log('project: ', formProject);
  console.log('tracker: ', formTracker);
  // console.log(subjectRef.current.value);
  console.log('priority: ', priority);

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
              <select value={formTracker} onChange={trackerHandler}>
                {tracker.map((trackers) => (
                  <option key={Math.random().toString()} value={trackers.id}>
                    {trackers.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={classes.block}>
              <label>Project</label>
              <select value={formProject} onChange={projectHandler}>
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
              <label>Priority</label>
              <select onChange={priorityHandler} value={priority}>
                <option value="1">Low</option>
                <option value="2">Normal</option>
                <option value="3">High</option>
                <option value="4">Urgent</option>
                <option value="5">Immediate</option>
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
