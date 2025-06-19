
import { ToastContainer } from "react-toastify"

import AccountMenu from "./Components/AccountMenu/AccountMenu"
import Login from "./Components/Login/Login"




function App() {


  return (
    <>
      <h1>Hello World!!</h1>
      <AccountMenu/>
    <Login/>
     <ToastContainer autoClose={2000} position="top-right"/>
    </>
  )
}

export default App
