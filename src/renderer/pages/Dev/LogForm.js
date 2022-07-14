import { useContext, useState, useEffect, useRef } from 'react';
import ProjectContext from 'renderer/store/project-context';
import TaskContext from '../../store/tasks-context';
import Button from '../../components/UI/Button';
import classes from './LogForm.module.scss';

const LogForm = (props) => {
  const commentRef = useRef();
  const [logTime, setLogTime] = useState(false);

  const [formTask, setFormTask] = useState(1);
  const [task, setTask] = useState([]);
  const taskCtx = useContext(TaskContext);
  const [formProject, setFormProject] = useState(1);
  const [project, setProject] = useState([]);
  const projectCtx = useContext(ProjectContext);

  useEffect(() => {
    projectCtx.projects.then((event) => {
      setProject(event);
    });
  }, []);

  useEffect(() => {
    taskCtx.Tasks.then((event) => {
      setTask(event);
    });
  }, []);

  const logTimeHandler = () => {
    setLogTime(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(commentRef.current.value);
    console.log(project);
    console.log(task);
    setLogTime(false);
    props.onCancel();
  };

  const taskHandler = (event) => {
    setFormTask(event.target.value);
  };
  const projectHandler = (event) => {
    setFormProject(event.target.value);
  };

  const dateHandler = (event) => {
    props.date(event.target.value);
  };

  return (
    <div className={classes.form}>
      <h3>Log Time</h3>
      <form onSubmit={onSubmitHandler}>
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
          <input type="date" onChange={dateHandler} />
        </div>

        <div className={classes.block}>
          <label>Hours</label>
          <input type="number" min={0} max={99} />
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
