import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddItem from './Components/AddItem'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NotFound from './assets/NotFound'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/addUser" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addProduct" element={<AddItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App