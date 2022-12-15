import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const Cart = () => {
  return (
    <div>
      <Navbar />
      <section
        className="h-100 gradient-custom p-5 mb-2 "
        style={{ backgroundColor: "#D3D3D3" }}
      >
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">🛒</h5>
                </div>
                <div className="card-body">
                  {/* Single item */}

                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      {/* Image */}
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src="https://static.fursac.com/data/cache/LandingPage/picture/main/5/d/19.1606245969.jpg"
                          className="w-100"
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                      {/* Image */}
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      {/* Data */}
                      <p>
                        <strong>Red hoodie</strong>
                      </p>
                      <p>Color: red</p>
                      <p>Size: M</p>

                      {/* Data */}
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      {/* Quantity */}
                      <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                        <div className="form-outline ">
                          <input
                            id="form1"
                            min={0}
                            name="quantity"
                            defaultValue={1}
                            type="number"
                            className="form-control rounded bg-dark w-25 "
                          />
                          <span>Quantity</span>
                        </div>
                      </div>
                      {/* Quantity */}
                      {/* Price */}
                      <p className="text-start text-md-center">
                        <div className="form-control rounded bg-dark ">
                          {" "}
                          $17.99
                        </div>
                      </p>
                      {/* Price */}
                    </div>
                  </div>
                  {/* Single item */}
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery in 24 hours</strong>
                  </p>
                  <p className="mb-0">
                   
                  </p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    src="https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_250/v1670420455/qcdauudpnadpxituim1b.png"
                    alt="Visa"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>$53.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>$53.98</strong>
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-dark"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
