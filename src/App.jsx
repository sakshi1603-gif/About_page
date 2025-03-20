import  style from './App.module.css'
import Navbar from './Component/1_Navbar/Navbar.jsx'
import Header from './Component/2_Header/Header.jsx'
import Section from './Component/3_Section/Section.jsx'
import Footer from './Component/4_Footer/Footer.jsx'


function App() {


  return (
    <div  className={style.App}>
     <Navbar/>
     <Header/>
     <Section/>
     <Footer/>
    </div>
  )
}

export default App
