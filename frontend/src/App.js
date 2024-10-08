import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Editor from './Components/Editor'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Secure from './Components/Secure';

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
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route element={<Secure />}>
                <Route path="/Editor" element={<Editor />} />
                {/* Add more protected routes here */}
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
