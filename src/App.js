import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import TimeTable from "./pages/TimeTable";
import PresentList from "./pages/PresentList";
import SnsEvent from "./pages/SnsEvent";
import About from "./pages/About";
import FunHola from "./pages/FunHola";
import HotHola from "./pages/HotHola";
import MainSong from "./pages/MainSong";
import './css/styles.css';
import GuestPage from "./pages/GuestPage";
import { useState } from "react";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/timeTable' element={<TimeTable/>} />
        <Route path='/presentList' element={<PresentList />} />
        <Route path='/funHola' element={<FunHola />} /> 
        <Route path='/hotHola' element={<HotHola />} /> 
        <Route path='/mainSong' element={<MainSong />} /> 
        <Route path='/snsEvent' element={<SnsEvent />} />
        <Route path='/about' element={<About />} />
        <Route path='/guestPage' element={<GuestPage />} />
      </Routes>
    </div>
  );
}

export default App;
