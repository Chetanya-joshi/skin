"use client"
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import './cartpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../../../NavBar/NavBar';
import { serum } from '../Products/Serum/serumjson';
export default function Cartpage() {
    const router = useRouter();
    const [product, setProduct] = useState(null);

    useEffect(() => {
      console.log("router:", router);
      if (router && router.query && router.query.id) {
          const { id } = router.query;
          console.log("id:", id);
          const selectedProduct = serum.find(item => item.id === id);
          if (selectedProduct) {
              setProduct(selectedProduct);
          } else {
              console.error(`Product with ID ${id} not found`);
          }
      }
  }, [router]);
  
  

    return (
        <>
            <NavBar />
            <div className="d-flex mt-5">
                {product && (
                    <div className="cart_images">
                        <img src={product.imgSrc} alt={product.productDes} />
                    </div>
                )}
                <div className="cart_Details ">
                    {product && (
                        <>
                            <div className="description">{product.productDes}</div>
                            <div className="sub_des">{product.subDes}</div>
                            <div className="rating d-flex gap-2 mt-2 mb-2">
                                <FontAwesomeIcon icon={faStar} width={14} style={{ color: '#944E63' }} alt="Star Icon" />
                                <span className="rate">4.83 | 8290 reviews</span>
                            </div>
                            <div className="MRP">MRP: ₹{product.price}</div>
                            <div className="units">{product.units} Units Sold</div>
                            <div className="tax">MRP inclusive of all taxes. Usually delivered in <span style={{ fontWeight: 700 }}>3-5 days</span></div>
                            <div className="cartbutton d-flex gap-3">
                                <button className="btn btn-primary cart">ADD TO CART</button>
                                <button className="btn btn-primary buy">BUY NOW</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
