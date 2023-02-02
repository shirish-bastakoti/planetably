import React from 'react'
import './App.css'
import FirstPage from './components/FirstPage'
import Footer from './components/Footer'
import FourthPage from './components/FourthPage'
import NavBar from './components/NavBar'
import Overlaying from './components/Overlaying'

// import Overlaying2 from './components/Overlaying2'
import SecondPage from './components/SecondPage'
import SixthPage from './components/SixthPage'
import ThirdPage from './components/ThirdPage'
// import ImageOne from './ImageOne'

function App() {
  return (
    <>
    
           <NavBar/>
          <div ><FirstPage /></div>
         <div id="company"> <SecondPage/></div> 
         <div className="mt-1 container"><ThirdPage/></div>
             
      <div className="mt-4 container" id="scope"><FourthPage /></div>
      <div className=" container text-center" id="team"><SixthPage /></div>
      <div> <Footer/> </div>

    </>
  )
}
export default App
