import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';

import LogContext from 'renderer/store/log-contex';
import Card from '../../../components/UI/Card';
import Box from './Box';
import classes from './Calender.module.scss';

const Calender = (props) => {
  const [log, setLog] = useState([]);
  const logCtx = useContext(LogContext);
  const value = moment();
  const startDay = value.clone().startOf('week');
  const endDay = value.clone().endOf('week');
  const day = startDay.clone().subtract(1, 'day');

  const calender = [];

  while (day.isBefore(endDay, 'day')) {
    calender.push(day.add(1, 'day').clone());
  }

  const [tempTask, setTempTask] = useState([]);
  const arrayTask = ['one', 'two', '', '', 'five', 'six', ''];

  useEffect(() => {
    setTempTask(arrayTask);
  }, []);

  useEffect(() => {
    logCtx.logs.then((event) => {
      setLog(event);
    });
  }, []);

  return (
    <Card style={{ backgroundColor: '#fff' }}>
      <div className={classes.weekDays}>
        {calender.map((day) => (
          <div key={Math.random().toString()}>
            {day.format('dddd').toString().substring(0, 3)}
          </div>
        ))}
      </div>
      <div className={classes.calender}>
        {calender.map((day, i) => (
          <Box date={tempTask[i]} key={Math.random().toString()} day={day} />
        ))}
      </div>
    </Card>
  );
};

export default Calender;
