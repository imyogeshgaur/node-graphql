import {lazy,Suspense} from 'react'
import { Route, Routes } from 'react-router-dom'
const Login = lazy(() => import('./Components/Login'));
const Signup = lazy(() => import('./Components/Signup'));
const NotFound = lazy(() => import('./assets/NotFound'));
const Home = lazy(() => import('./Components/Home'));
const AddItem = lazy(() => import('./Components/AddItem'));
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/addUser" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addProduct" element={<AddItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  )
}

export default App