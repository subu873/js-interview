import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import TimerApp from './pages/timer';
import StopWatch from './pages/stopwatch';
import { Fragment } from 'react';
import ToDoApp from './pages/ToDoApp';
import FileStructureUI from './pages/FileStructure';
import ThorttleUI from './pages/Thorttle';
import DebounceUI from './pages/Debounce';
import HolyGrail from './pages/HolyGrail';


const App = () => {
  return (
    <Fragment>
      {/* <TimerApp /> */}
      {/* <StopWatch /> */}
      {/* <ToDoApp /> */}
      {/* <FileStructureUI /> */}
      {/* <ThorttleUI /> */}
      {/* <DebounceUI /> */}
      <HolyGrail />
    </Fragment>
  )
}

export default App;
