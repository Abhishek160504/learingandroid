import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import Clubs from './Pages/Clubs';
import Postings from './Pages/Postings';
import Faqs from './Pages/Faqs';
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 

  return (
  
      
      <Router>
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/Clubs' element={<Clubs/>} />
      <Route path='/Postings' element={<Postings/>} />
      <Route path='/Faqs' element={<Faqs/>} />
      
      </Routes>
      </Router>
    
  )
}

export default App
