import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Project from './components/project/Project';
import About from './components/about/About';
import News from './components/news/News';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use Layout as a layout wrapper for all routes */}
        <Route  element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about"  element={<About/>}/>
          <Route path="/project"  element={<Project/>}/>
          <Route path="/news"  element={<News/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;




