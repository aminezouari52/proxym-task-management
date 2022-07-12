// import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classes from './Tasks.module.scss';

const Task = (props) => {
  // const date = moment(props.task.created_on).format('MMMM D, YYYY');

  return (
    <li className={classes['table-row']}>
      <div className={`${classes.col} ${classes['col-1']}`}>
        {props.task.id}
      </div>
      <div className={`${classes.col} ${classes['col-2']}`}>
        {props.task.tracker}
      </div>
      <div className={`${classes.col} ${classes['col-3']}`}>
        {props.task.subject}
      </div>
      <div className={`${classes.col} ${classes['col-4']}`}>
        {props.task.status}
      </div>
      <div className={`${classes.col} ${classes['col-5']}`}>
        {props.task.priority}
      </div>
    </li>
  );
};

export default Task;
