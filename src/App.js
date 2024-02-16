import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import TimeTable from "./pages/TimeTable";
import PresentList from "./pages/PresentList";
import SnsEvent from "./pages/SnsEvent";
import About from "./pages/About";
import FunHola from "./pages/FunHola";
import HotHola from "./pages/HotHola";
import MainSong from "./pages/MainSong";
import GuestPage from "./pages/GuestPage";
import Menu from "./pages/Menu";
import './css/styles.css';
import { getCookie, setCookie } from "./utils/cookie";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const cookie = getCookie('visitor');
    if (!cookie) {
      const currentDate = new Date();
      const expiresDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 1, // 다음 날로 설정
        0, // 시간을 00시로 설정
        0, // 분을 00분으로 설정
        0, // 초를 00초로 설정
      );
      // 시차 보정
      setCookie('visitor', 'visitor', { path: './', expires: expiresDate, secure: true });
      // callAPI(); 
    }
  }, []);

  const callAPI = () => {
    axios.get('https://welcome-hola.sku-sku.com/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('API Error: ', error);
      })
  }

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
        <Route path='/menu' element={<Menu/>} />
      </Routes>
    </div>
  );
}

export default App;
