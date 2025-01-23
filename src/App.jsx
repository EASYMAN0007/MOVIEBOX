import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Example from "./pages/Example"
import Login from "./pages/login"

function App() {

  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/example" element={<Example/>}/>
    <Route path="/login" element={<Login/>}/>

   </Routes>
   
   </>
  )
}

export default App
