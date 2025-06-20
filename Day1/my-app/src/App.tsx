
import { ToastContainer } from "react-toastify"

import AccountMenu from "./Components/AccountMenu/AccountMenu"
import Login from "./Components/Login/Login"
import DummyComponent from "./Components/DummyComponent"
import Products from "./Components/Products/Products"




function App() {


  return (
    <>
      <h1>Hello World!!</h1>
      {/* <DummyComponent/> 
     <AccountMenu/>
    <Login/>*/}
    <Products/>
     <ToastContainer autoClose={2000} position="top-right"/> 
    </>
  )
}

export default App
