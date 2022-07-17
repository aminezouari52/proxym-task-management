import LogForm from './LogForm';
import LogTime from './LogTime';
import Calender from './Calender/Calender';
import Card from '../../components/UI/Card';
import classes from './Dev.module.scss';
import { useState } from 'react';

const Dev = () => {
  const [logForm, setLogForm] = useState(false);

  const logFormHandler = () => {
    setLogForm(true);
  };

  return (
    <div className={classes.dev}>
      {!logForm && (
        <>
          <LogTime onClick={logFormHandler} />
          <Calender date={date} />
        </>
      )}
      {logForm && <LogForm onCancel={() => setLogForm(false)} />}
    </div>
  );
};

export default Dev;
