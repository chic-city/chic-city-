 import React from 'react'
import Search from './search'
import Footer from './footer'
import axios from 'axios'
import { useEffect,useState } from 'react'
const shop = () => {
    // const[search,setSearch]=useState("")
    const [allSuits,setAllSuits]=useState([])
    console.log("hii",allSuits);
    
      useEffect(() => {
        axios.get("http://localhost:4000/api/products/").then(res => {
        console.log(res.data,'merue');
          
        setAllSuits(res.data)
          
        })
      }, [])
      console.log(allSuits,"aziz");

 return (
    
    <div className="p-3 mb-2 bg-secondary" >
        <Search/>
        <header>
  
        </header>
        <section className="py-5" >
          
        <div className="container px-4 px-lg-5 mt-5">
          
<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
  {allSuits.allArticles && allSuits.allArticles.map((e)=>{
    return (
      <>

  <div className="col mb-5">

    {/*  */}
      <div className="card h-100 ">
          {/* <!-- Sale badge--> */}
          
          <div className=" text-white position-absolute"  >
                
          <button
type="button"
className="btn btn-danger btn-sm mb-2"
data-mdb-toggle="tooltip"
title="Move to the wish list"
>
<i className="fas fa-heart" />
</button>
          </div>
          
          {/* <!-- Product image--> */}
          <img className="card-img-top" src={e.articleImage} alt="..." />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
              <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">{e.articleName}</h5>
                  {/* <!-- Product reviews--> */}
                  <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      
                  </div>
                  {/* <!-- Product price--> */}
                  
                  <h5 className="fw-bolder btn-outline"><select className="form-select text-center " >
                  <option defaultValue="S" >Size: S</option>
        <option value="M">M</option>
        <option value="L">L</option>
         <option value="XL">XL</option>
               
            </select></h5>
            
                  
                  ${e.price}
                  
              </div>
              
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
          </div>
      </div>
      {/*  */}
  </div>
  
  </>
    )
  })}
  </div>
  
                
                    
                    
                    </div>
                    
                    </section>
                    <Footer/>              
    </div>
    
  )
}

export default shop