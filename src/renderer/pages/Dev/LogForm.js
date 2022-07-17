import axios from 'axios';
import { useContext, useState, useEffect, useRef } from 'react';
import TaskContext from '../../store/tasks-context';
import AuthContext from 'renderer/store/auth-context';
import Button from '../../components/UI/Button';
import classes from './LogForm.module.scss';

const LogForm = (props) => {
  const commentRef = useRef();
  const dateRef = useRef();
  const hoursRef = useRef();

  const [formTask, setFormTask] = useState(1);
  const [task, setTask] = useState([]);
  const authCtx = useContext(AuthContext);
  const taskCtx = useContext(TaskContext);

  useEffect(() => {
    taskCtx.filtred_tasks.then((event) => {
      setTask(event);
    });
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const log = {
      time_entry: {
        activity_id: 9,
        issue_id: task.id,
        spent_on: dateRef,
        comments: commentRef,
        hours: hoursRef,
      },
    };
    fetchLog(log);
  };
  async function fetchLog(log) {
    const token = authCtx.token;

    const BASE_URL = 'http://localhost/redmine';
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': token,
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/time_entries.json`,
      log,
      config
    );
  }

  const taskHandler = (event) => {
    setFormTask(event.target.value);
  };

  return (
    <div className={classes.form}>
      <h3>Log Time</h3>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.block}>
          <label>Task</label>
          <select value={formTask} onChange={taskHandler}>
            {task.map((tasks) => (
              <option key={Math.random().toString()} value={tasks.id}>
                {tasks.subject}
              </option>
            ))}
          </select>
        </div>

        <div className={classes.block}>
          <label>Comment</label>
          <input type="textarea" ref={commentRef} />
        </div>

        <div className={classes.block}>
          <label>Date</label>
          <input type="date" ref={dateRef} />
        </div>

        <div className={classes.block}>
          <label>Hours</label>
          <input type="number" min={0} max={99} ref={hoursRef} />
        </div>
        <Button type="submit" className={classes.button}>
          Create
        </Button>

        <Button
          type="button"
          className={classes.close}
          onClick={props.onCancel}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default LogForm;
