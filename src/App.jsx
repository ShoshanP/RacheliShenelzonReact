import './App.css'
import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';
import Home from './commponents/Public/Home';
import Admin from './commponents/Admin/Admin';
import Login from './commponents/Admin/Login';
import AllServices from './commponents/Public/AllServices';
import MeetingList from './commponents/Public/mettingList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/admin"} element={<Admin />}>
            <Route path={"allServices"} element={<AllServices />} />
            <Route path={"meetings"} element={<MeetingList/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



