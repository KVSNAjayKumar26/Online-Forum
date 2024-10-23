import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ThreadPage from './pages/ThreadPage'
import UserProfilePage from './pages/UserProfilePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/thread/:id' element={<ThreadPage />} />
        <Route path='/user/:id' element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;