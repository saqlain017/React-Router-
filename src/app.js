import React from 'react'
import './app.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Error} from './pages/Error404'
import Navbar from './Components/Navbar'
import { useState, createContext } from 'react'

export const appContext = createContext();
function App(){       
    const [userName, setuserName] = useState("Saqlain");
    return(
        <appContext.Provider value={{userName,setuserName}}>
         <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path="*" element={<Error />} />
            </Routes>
         </Router>
        </appContext.Provider>
    )
}

export default App