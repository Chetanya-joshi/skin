'use client'
import React from 'react'
import Footer from '../../Footer/page'
import ProductList from '../../Ourlatest/page'
import Products from '../../Products/Products'
import NavBar from '../../NavBar/NavBar'
import Header from '../../Header/Header'
import ContactForm from '../../ContactUs/page'
import Consultant from '../../Consultant/page'
import MainSlider from '../../Mainslider/page'
import Aboutus from '../../Aboutus/page'
import Blog from '../../Blog/page'
export default function page() {
  return (
    <div>

      <NavBar></NavBar>
      <Header></Header>
      <ProductList></ProductList>
      <Products />

      

       
       {/* <Aboutus></Aboutus>  */}
      {/* <ProductList></ProductList>  */}
    {/* <Consultant></Consultant> */}
      <br></br>
      {/* <Blog></Blog> */}

       {/* <Blog></Blog>  */}
       <Footer></Footer> 





    </div>
  )
}
