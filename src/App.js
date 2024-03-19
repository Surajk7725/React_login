import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/LoginSignup/Login';
import Register from './Components/LoginSignup/Register';
import Forget from './Components/LoginSignup/Forget';
import Sidebar from './Components/Entertain/Sidebar';
import Sports from './Components/Entertain/Sports';
import Music from './Components/Entertain/Music';
import Movies from './Components/Entertain/Movies';
import WebSeries from './Components/Entertain/WebSeries';
import Anime from './Components/Entertain/Anime';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/forget' element={<Forget/>}></Route>
        <Route path='/home' element={<Sidebar/>}>
        <Route path='movies' element={<Movies/>}></Route>
        <Route path='music' element={<Music/>}></Route>
        <Route path='web-series' element={<WebSeries/>}></Route>
        <Route path='anime' element={<Anime/>}></Route>
        <Route path='sports' element={<Sports/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
