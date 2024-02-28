import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Signup from "./pages/Signup"

function App() {
  
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>  
    </>
  )
}

export default App
