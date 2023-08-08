import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Project from './components/project/Project';
import About from './components/about/About';
import News from './components/news/News';
import Admin from './components/Admin';
import PostsAdmin from './components/Posts/PostsAdmin';
import PostEdit from './components/Posts/PostEdit';
import Post from './components/Posts/Post';
import { IntlProvider } from 'react-intl';
import Mechanical from './components/contact-us/Mechanical';
import Humanity from './components/humanity/Humanity';

function App() {
  return (
    <IntlProvider locale='en'>
    <Router basename='/'>
      <Routes>
            <Route  element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about/:type"  element={<About/>}/>
              <Route path="/project/:type"  element={<Project/>}/>
              <Route path="/humanity/:type"  element={<Humanity/>}/>
              <Route path="/posts/:type" element={<News />} />
              <Route path="/posts/:type/:postId" element={<Post />} />    
              <Route path='/mechanical/:type' element={<Mechanical/>}/>      
            </Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/posts/:type" element={<PostsAdmin />} />
            <Route path="/admin/posts/:type/create" element={<PostEdit/>} />
            <Route path="/admin/posts/:type/edit/:postId" element={<PostEdit />} />
            <Route path="/admin/mechanical/:type" element={<PostsAdmin />} />
            <Route path="/admin/mechanical/:type/create" element={<PostEdit/>} />
            <Route path="/admin/mechanical/:type/edit/:postId" element={<PostEdit />} />
      </Routes>
    </Router>
    </IntlProvider>
  );
}

export default App;