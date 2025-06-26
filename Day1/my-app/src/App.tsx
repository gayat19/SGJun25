
import { ToastContainer } from "react-toastify"
import AccountMenu from "./Components/AccountMenu/AccountMenu"
import Login from "./Components/Login/Login"
import Products from "./Components/Products/Products"
import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"
import First from "./Components/First/First"
import Home from "./Components/Home"
import DummyComponent from "./Components/DummyComponent"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import NewProductList from "./Components/NewProductList"

function App() {

  const queryClient = new QueryClient();

  return (
    <>
 <QueryClientProvider client={queryClient}>
          <Routes>
            {/* Landing page */}
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<AccountMenu/>}>
              <Route path="first" element={<First/>}/>
              <Route path="dummy" element={<DummyComponent/>}/>
              <Route path="login" element={<Login/>}/>
              
              <Route path = "products" element={<ProtectedRoute children={<NewProductList/>}> 
              </ProtectedRoute>}/>
            </Route>
            
          </Routes>

        <ToastContainer autoClose={2000} position="top-right"/> 
     </QueryClientProvider>
    </>
  )
}

export default App
