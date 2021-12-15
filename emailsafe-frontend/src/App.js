import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UserHome from './pages/UserHome';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';

//Global variables for deployment
import { BASE_URL, BASE_BACKEND } from './globals'


function App() {
  return (
    <div className="App">
      <Router>
        <div class="pt-5"></div>
        <div class="pt-5"></div>
        <MainNavbar />
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/userhome' element={<UserHome/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
