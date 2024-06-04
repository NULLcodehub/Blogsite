import React from "react"
import Header from "./components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Layout from "./Layout"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"

import {Routes,Route} from "react-router-dom"

function App() {
  

  return (
    
    <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index element={<Blogs/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/signup'element={<Signup/>}/>
        </Route>

        
    </Routes>
      
      
    
  )
}

export default App
