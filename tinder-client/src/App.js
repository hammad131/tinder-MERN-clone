
import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



import Home from './pages/Home/home';
import SignIn from './pages/SignIn/signIn';
import Chats from './pages/Chats/chats';




function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<SignIn />}></Route>
      <Route path='home' element={<Home />}></Route>
      <Route path='/chats' element={<Chats/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
