"use client"
import React,{useState} from 'react';
import './facewash.css';
import Image from 'next/image';
// import product from '../../public/product1.webp';
import { facewash } from './facewashjson';
export default function Facewash() {

    const [data , setData] = useState(facewash);

  return (
    <div className="products mb-5">
        <div>
            <h2 style={{textAlign:'center' , marginBottom:'50px' , marginTop:'50px' , color:'#944E63' , fontWeight:700}}>FACEWASH</h2>
        </div>

        <div className="d-flex mm">

            {data.map((item)=>{
                return(
                    <>
                        <div className="boxs">
                <div className="product_img">
                <Image src={item.imgSrc} width={420} height={420} style={{borderRadius:'20px'}}/>
                </div>

                <div className="product_des">{item.productDes}</div>
                <div className="mrp">MRP</div>
                <div className="product_price">
                    <del>{item.price}</del><span>Rs .{item.sellingPrice}.00</span><div className="offer">{item.offer}</div>
                </div>
                <div className="tax">(incl. of all taxes)</div>
                <button className="btn btn-primary">Add To Cart</button>

            </div>
                    </>
                )
            })}

           

            
        </div>

            <button className="btn btn-primary showmore">SHOW MORE</button>

    </div>
  )
}
