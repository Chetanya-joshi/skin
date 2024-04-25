import React from 'react'
import './Products.css';
import Sunscream from './Sunscream/Sunscream';
import Facewash from './Facewash/Facewash';
import Scrub from './Scrub/Scrub';
import Serum from './Serum/page';
function Products() {
  return (
    <div>
      <Sunscream />
      <Facewash />
      <Scrub />
      <Serum />
    </div>
  )
}

export default Products