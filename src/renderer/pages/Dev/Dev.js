import LogForm from './LogForm';
import LogTime from './LogTime';
import Calender from './Calender/Calender';
import Card from '../../components/UI/Card';
import classes from './Dev.module.scss';
import { useState } from 'react';

const Dev = () => {
  // var curr = new Date();
  // curr.setDate(curr.getDate());
  // var currDate = curr.toISOString().substring(0, 10);

  const [date, setDate] = useState('');
  const [logForm, setLogForm] = useState(false);

  const logFormHandler = () => {
    setLogForm(true);
  };

  const dateHandler = (event) => {
    setDate(event);
  };

  return (
    <div className={classes.dev}>
      {!logForm && (
        <>
          <LogTime onClick={logFormHandler} />
          <Calender date={date} />
        </>
      )}
      {logForm && (
        <LogForm date={dateHandler} onCancel={() => setLogForm(false)} />
      )}
    </div>
  );
};

export default Dev;
