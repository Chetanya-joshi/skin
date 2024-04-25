"use client"
import React,{useState} from 'react';
import './sunscream.css';
import Image from 'next/image';
import Link from 'next/link';
// import product from '../../public/product1.webp';
import { sunscreanjson } from './sunscreenjson';
export default function Sunscream() {

    const [data , setData] = useState(sunscreanjson);

  return (
    <div className="products mb-5">
        <div>
            <h2 style={{textAlign:'center' , marginBottom:'50px' , marginTop:'50px' , color:'#944E63' , fontWeight:700}}>SUNSCREAM</h2>
        </div>

        <div className="d-flex mm">

            {data.map((item)=>{
                return(
                    <>
                        <div className="boxs mb-5 ">
                <div className="product_img">
              <Link href={`/CartPage?id=${item.id}`}>  <Image src={item.imgSrc} width={380} height={380} style={{borderRadius:'20px'}}/></Link>
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
