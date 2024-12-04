"use client";
import { kidsProducts,mensProducts, womensProducts } from "@/app/data";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./details.css"
import { Provider, useDispatch } from "react-redux";
import {  myStore } from "@/store/store";
import { addToCart } from "@/store/slices/products";
import { toast } from "react-toastify";

export default function Page(){
  return <Provider store={myStore}>
    <Product></Product>
  </Provider>
}
 
 function Product() {
  let dispatch = useDispatch();
  let[ad,setad]= useState({});
    let params = useParams();
    const allProducts =[...mensProducts , ...womensProducts , ...kidsProducts]
    useEffect(()=>{
        let adAgya= allProducts.find((ad)=>{
            if(decodeURI(params.abc)==ad.id){
                return true;
            }
        });
        if(adAgya){
            setad(adAgya)
        }
    },[])
   return (
     <div>
      <div className="container">
      <h1>{params.abc}</h1>
      <div className="container-fliud">
        <div className="wrapper row">
          <div className="preview col-md-5">
            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1">
              <img src={'/'+ad.src} />
              </div>
            </div>
          </div>
          <div className="details col-md-6">
            <h3 className="product-title">{ad.name}</h3>
           
            <p className="product-description">
            A shoe is a type of footwear that covers the foot and protects it with a sole. There are various styles of shoes for different occasions, such as athletic shoes, dress shoes, sandals, and boots.
            </p>
            <h4 className="price">
              Current Price: <span>{ad.price}</span>
            </h4>
            <p className="vote">
              <strong>91%</strong> of buyers enjoyed this product!{" "}
            
            </p>
           
            <div className="action">
              <button onClick={()=>{
                dispatch(addToCart(ad))
                toast.success("Your Item is Added")
              }}
               style={{backgroundColor : '#ff5722' , color : 'white' , borderRadius : '4px' , fontSize : '12px' , fontWeight : 'bold' , paddingInline : '14px' , paddingBlock : '10px' }}
                className="add-to-cart btn btn-default"
                type="button"

              
              
              >
                Add To Cart
              </button>
      
            </div>
          </div>
        </div>
      </div>
    </div>
       
     </div>
   )
 }