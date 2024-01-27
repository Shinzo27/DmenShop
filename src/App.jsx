import './App.css'
import Header from './Layout/Header'
import Body from './Layout/Body'
import Footer from './Layout/Footer'
import { Routes, Route } from 'react-router-dom'
import Profile from './Components/Profile'
import Aboutus from './Components/Aboutus'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
