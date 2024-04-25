"use client"
import React,{useState} from 'react';
import './serum.css';
import Image from 'next/image';
// import product from '../../public/product1.webp';
import { serum } from './serumjson';
import Link from 'next/link';
export default function Serum() {

    const [data , setData] = useState(serum);
    const slicedata = data.slice(0,3);
  return (
    <div className="products mb-5">
        <div>
            <h2 style={{textAlign:'center' , marginBottom:'50px' , marginTop:'50px' , color:'#944E63' , fontWeight:700}}>SERUM</h2>
        </div>

        <div className="d-flex mm">

            {slicedata.map((item)=>{
                return(
                    <>
                        <div className="boxs mb-5">
                <div className="product_img">
                <Link href={`/CartPage?id=${item.id}`}>  <Image src={item.img} width={380} height={380} style={{borderRadius:'20px'}}/></Link>
                </div>

                <div className="product_des">{item.proddesc}</div>
                <div className="mrp">MRP</div>
                <div className="product_price">
                    <del>{item.originalprice}</del><span>Rs .{item.sellprice}.00</span><div className="offer">{item.discount}</div>
                </div>
                <div className="tax">(incl. of all taxes)</div>
                <button className="btn btn-primary">Add To Cart</button>

            </div>
                    </>
                )
            })}

           

            
        </div>

         <Link href="/Serum">   <button className="btn btn-primary showmore">SHOW MORE</button></Link>

    </div>
  )
}
