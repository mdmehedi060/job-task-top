
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Home/Navbar/Navbar'
import Banner from './Home/Navbar/Banner'
import Card from './Home/Navbar/Card'
import Offers from './Home/Navbar/Offers'
import Footer from './Home/Navbar/Footer'
import Popular from './Home/Navbar/Popular'
import Blog from './Home/Navbar/Blog'

function App() {
  

  return (
    <>
     <Outlet></Outlet>
     <Navbar></Navbar>
     <Banner></Banner>
     <Card></Card>
   <Offers></Offers>
   <Popular></Popular>
   <Blog></Blog>
   <Footer></Footer>
    </>
  )
}

export default App
