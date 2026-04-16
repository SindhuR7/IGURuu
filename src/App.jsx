import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import Teachers from './pages/Teachers.jsx'
import Events from './pages/Events.jsx'
import Pages from './pages/Pages.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import LoginForm from './pages/LoginForm.jsx'

const App = () => {
  return (
    <>
     <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign_in' element={<LoginForm/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/teachers' element={<Teachers/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/pages' element={<Pages/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App