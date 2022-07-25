
import './App.css';
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Login from './components/login';
import { Button } from '@mui/material';
import Home from './components/home';
import Navbar from './components/navbar';


function App() {
  return (
    <div >
      
      <Router>
        <Navbar></Navbar>
        <Routes>
        
          <Route path='/login' element={<Login />}> </Route>
          <Route path='/home' element={<Home />}> </Route>
        
        </Routes>
        
     
      </Router>
      
    </div>
  );
}

export default App;
