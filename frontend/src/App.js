import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Register from './Components/Register'



import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
