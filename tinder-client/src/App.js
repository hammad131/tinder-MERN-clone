
import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



import Home from './pages/Home/home';
import SignIn from './pages/SignIn/signIn';



function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<SignIn />}></Route>
      <Route path='home' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
