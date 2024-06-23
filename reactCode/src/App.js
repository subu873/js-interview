import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import TimerApp from './pages/timer';
import StopWatch from './pages/stopwatch';
import { Fragment } from 'react';
import ToDoApp from './pages/ToDoApp';


const App = () => {
  return (
    <Fragment>
      {/* <TimerApp /> */}
      {/* <StopWatch /> */}
      <ToDoApp />
    </Fragment>
  )
}

export default App;
