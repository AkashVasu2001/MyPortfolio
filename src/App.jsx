import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import './assets/fonts.css'
import { Home, Education, Work, Skills, Contact } from './pages/Index.jsx'

function App() {
  
 
  return (
    <>
      <Router>
        <Nav />
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Education" element={<Education/>} />
          <Route path="/Work" element={<Work/>} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact/>} />

      </Routes>
      </Router>
  
    </>
  )
}

export default App

//import React, { Suspense } from 'react';
//const Spline = React.lazy(() => import('@splinetool/react-spline'));


  // <Suspense fallback={<div>Loading...</div>}>
  //<Spline  scene="https://prod.spline.design/7nOrodjfIiv2zj0J/scene.splinecode" className="fixed" />
//</Suspense>

{/* <div className="bg-slate-500 overflow-hidden" >
        <Nav/>
        <Home />
        <Education />
        <Work />
        <Skills/>
      </div> 
      
      import { Home } from './components/Home';
import { Education } from './components/Education';
import { Work } from './components/Work';
import { Nav } from './components/Nav';
import { Skills } from './components/Skills';*/}