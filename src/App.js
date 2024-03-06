import './App.scss';
import Home from './pages/Home/Home'; 
import Login from './pages/Login/Login'; 
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
