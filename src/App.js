import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path='login' element={<Login/>}>

          </Route>
          <Route path='signup' element={<SignUp/>}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
