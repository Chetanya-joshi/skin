import React from 'react'
import Footer from '../../Footer/page'
import ProductList from '../../Ourlatest/page'
import Products from '../../Products/Products'
import NavBar from '../../NavBar/NavBar'
import Header from '../../Header/Header'

export default function page() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <ProductList></ProductList>
      <Products />
      <Footer></Footer>

    </div>
  )
}
