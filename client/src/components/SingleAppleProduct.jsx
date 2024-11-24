import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FOUR04 from './FOUR04'

function SingleAppleProduct() {
    const [product,setProduct] = useState([])
//    console.log(useParams);
   const {id} = useParams()
    useEffect(()=>{
        fetch("http://localhost:4999/data")
        .then((res)=> res.json())
        .then((data)=>setProduct(data.filter((data)=>data.product_url == id)) )
        .catch((err)=>console.log(err))
    },[id])
    console.log(product);

if(product.length){
     return (
    
     <section className="internal-page-wrapper top-100">
        <div className="container">
          {product.map((product) => {
           let id = product.product_url;
           let title = product.product_name;
           let img = product.Product_img;
           let Brief = product.Product_brief_description;
           let StartPrice = product.Starting_price;
           let PriceRange = product.Price_range;
           let details = product.Product_description;
            

            let productDiv = (
                
              <div key={id} className="bottom-100">
                <div className="row justify-content-center text-center bottom-50">
                  <div className="col-12">
                    <br /><br />
                    <div className="title-wraper bold">{title}</div>
                    <div className="brief-description">{Brief}</div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">
                      {`Starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="product-details">{details}</div>
                  </div>

                  <div className={`col-sm-12 col-md-6`}>
                    <div className="prodict-image">
                      <img src={img} />
                    </div>
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
  
  );
}
else{
    return(<FOUR04/>)
}
 
}

export default SingleAppleProduct