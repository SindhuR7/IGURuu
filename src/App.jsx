import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import LoginForm from './pages/LoginForm.jsx'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
     <BrowserRouter>
     <ToastContainer/>
     <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign_in' element={<LoginForm/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App