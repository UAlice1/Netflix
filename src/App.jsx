
import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './assets/Pages/Home'
import Main from './assets/Pages/Main.jsx';

function App() {

  return (
   <div>
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/"element={<Home />} />
          
        </Route>
      </Routes>
    </Router>
    </>
   </div>
   
  )
}

export default App
