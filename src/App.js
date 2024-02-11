import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import TimeTable from "./pages/TimeTable";
import PresentList from "./pages/PresentList";
import StageProgram from "./pages/StageProgram";
import CollegeRecreation from "./pages/CollegeRecreation";
import SnsEvent from "./pages/SnsEvent";
import About from "./pages/About";
import './css/styles.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/timeTable' element={<TimeTable />} />
        <Route path='/presentList' element={<PresentList />} />
        <Route path='/stageProgram' element={<StageProgram />} />
        <Route path='/collegeRecreation' element={<CollegeRecreation />} />
        <Route path='/snsEvent' element={<SnsEvent />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
