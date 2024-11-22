import React from 'react'
import "./App.css"
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Routes>

      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App