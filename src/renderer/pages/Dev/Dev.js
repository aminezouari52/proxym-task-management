import LogForm from './LogForm';
import LogTime from './LogTime';
import Calender from './Calender/Calender';
import Card from '../../components/UI/Card';
import classes from './Dev.module.scss';
import { useContext, useState, useEffect } from 'react';
import LogContext from 'renderer/store/log-contex';

const Dev = () => {
  const [logForm, setLogForm] = useState(false);
  const logCtx = useContext(LogContext);
  const [log, setLog] = useState([]);

  useEffect(() => {
    logCtx.logs.then((event) => {
      setLog(event);
    });
  }, []);

  const logFormHandler = () => {
    setLogForm(true);
  };

  return (
    <div className={classes.dev}>
      {!logForm && (
        <>
          <LogTime onClick={logFormHandler} />
          <Calender />
        </>
      )}
      {logForm && <LogForm onCancel={() => setLogForm(false)} />}
    </div>
  );
};

export default Dev;
