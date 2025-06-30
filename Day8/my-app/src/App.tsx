
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'
import ProtectedRoute from './Components/ProtectedRoute'
import { Profile } from './Components/Profile'
import EmployeeDetails from './Components/EmployeeDetails'

function App() {


  return (
    <>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
         <Route path='home' element={<EmployeeDetails/>}/>
        <Route path='/' element={<Home/>}>
            <Route path='/profile' element={<ProtectedRoute> 
                <Profile/>
            </ProtectedRoute>}/>
        </Route>
        
       
      </Routes>
    </>
  )
}

export default App
