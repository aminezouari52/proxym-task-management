import LogTime from './LogTime';
import Calender from './Calender/Calender';
import Card from '../../components/UI/Card';
import classes from './Dev.module.scss';

const Dev = () => {
  return (
    <>
      <Card className={classes.dev}>
        <LogTime />
        <Calender />
      </Card>
    </>
  );
};

export default Dev;
