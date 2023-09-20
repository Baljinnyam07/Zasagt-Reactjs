import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './components/Home';
import Layout from './components/Layout';
import Project from './components/project/Project';
import About from './components/about/About';
import News from './components/news/News';
import PostsAdmin from './components/admin/PostsAdmin';
import PostEdit from './components/Posts/PostEdit';
import Post from './components/Posts/Post';
import { IntlProvider } from 'react-intl';
import Mechanical from './components/contact-us/Mechanical';
import Humanity from './components/humanity/Humanity';
import Admin from './components/admin/Admin';
import HireEdit from './components/Posts/HireEdit';
import { auth } from './firebase';
import Auth from './components/Auth';
import './index.css'

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
              <Route path="/mechanical/:type/:postId" element={<Post />} />       
            </Route>
            <Route path="/admin" element={<RequireAuth><Admin /></RequireAuth>} />
            <Route path="/admin/posts/:type" element={<RequireAuth><PostsAdmin /></RequireAuth>} />
            <Route path="/admin/posts/:type/create" element={<RequireAuth><PostEdit/></RequireAuth>} />
            <Route path="/admin/posts/:type/edit/:postId" element={<RequireAuth><PostEdit /></RequireAuth>} />
            <Route path="/admin/mechanical/:type" element={<RequireAuth><PostsAdmin /></RequireAuth>} />
            <Route path="/admin/mechanical/:type/create" element={<RequireAuth><PostEdit/></RequireAuth>} />
            <Route path="/admin/mechanical/:type/edit/:postId" element={<RequireAuth><PostEdit /></RequireAuth>} />
            <Route path="/admin/humanity/:type" element={<RequireAuth><PostsAdmin /></RequireAuth>} />
            <Route path="/admin/humanity/:type/create" element={<RequireAuth><HireEdit/></RequireAuth>} />
            <Route path='admin/anket/:type' element={<RequireAuth><PostsAdmin/></RequireAuth>}/>
            <Route path="/admin/anket/:type/create" element={<RequireAuth><HireEdit/></RequireAuth>} />
            <Route path="/admin/anket/:type/edit/:postId" element={<RequireAuth><HireEdit /></RequireAuth>} />
            <Route path="/admin/humanity/:type/edit/:postId" element={<RequireAuth><HireEdit /></RequireAuth>} />
            <Route path="/admin/feedbacks/:type" element={<RequireAuth><PostsAdmin /></RequireAuth>} />
            <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
    </IntlProvider>
  );
}

export default App;

function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  return user && children;
}