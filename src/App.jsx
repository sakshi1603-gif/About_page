import  style from './App.module.css'
import Navbar from './Component/1_Navbar/Navbar.jsx'
import Header from './Component/2_Header/Header.jsx'
import Section from './Component/3_Section/Section.jsx'
import Fsection from './Component/4_info/info.jsx'
import Footer from './Component/5_Footer/Footer.jsx'


function App() {


  return (
    <div  className={style.App}>
     <Navbar/>
     <Header/>
     <Section/>
     <Fsection/>
     <Footer/>
    </div>
  )
}

export default App
