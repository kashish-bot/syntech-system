import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/home/home'
import Services from './components/Navbar/services/services'
import Banner from './components/Navbar/banner/banner'
import Hardware from './components/Navbar/hardware/hardware'
import AMC from './components/Navbar/amc/amc'
import Us from './components/Navbar/whyUs/whyUs'
import Process from './components/Navbar/process/process'
import Industry from './components/Navbar/industry/industry'
import Count from './components/Navbar/count/count'
import Contact from './components/Navbar/contact/contact'
import Footer from './components/Navbar/footer/footer'


function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
      <Hardware/>
      <AMC/>
      <Us/>
      <Process/>
      <Count/>
      <Industry/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
