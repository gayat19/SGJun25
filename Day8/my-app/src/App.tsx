
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
