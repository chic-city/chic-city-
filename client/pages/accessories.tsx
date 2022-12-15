import React from 'react'
import Navbar from "./navbar"
import Footer from './footer'
const accessories = () => {
  return (
    <div className="p-3 mb-2 bg-secondary">
        <Navbar/>
        <header>
            
        </header>
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100 ">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" >Promo</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://image.made-in-china.com/155f0j00OmjlbnHccpoJ/2022-Mens-Business-Necktie-Stripe-Suit-Office-Tie-Fashion-Casual-Accessories-for-Men.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Special Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </section>
                    <Footer/>
    </div>
  )
}

export default accessories