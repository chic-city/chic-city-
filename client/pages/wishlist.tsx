import React from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
  } from "mdb-react-ui-kit";
import Navbar from './navbar';
import Footer from './footer';
const wishlist = () => {
  return (
    <div>
   <Navbar/>
<section className="vh-100" style={{ backgroundColor: "#D3D3D3" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <img className="h2" src='https://res.cloudinary.com/drd0uckic/image/upload/c_scale,w_100/v1671119952/gjph6zfgn1owxmlvl2hj.png'/>
             
            </p>

            <MDBCard className="mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="align-items-center">
                  <MDBCol md="2">
                    <MDBCardImage
                      fluid
                      src="https://static.fursac.com/data/cache/LandingPage/picture/main/5/d/19.1606245969.jpg"
                      alt="Generic placeholder image"
                    />
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Product Name</p>
                      <p className="lead fw-normal mb-0">Suits</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Color</p>
                      <p className="lead fw-normal mb-0">
                        <MDBIcon
                          fas
                          icon="circle me-2"
                          style={{ color: "#fdd8d2" }}
                        />
                        DARK
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Quantity</p>
                      <p className="lead fw-normal mb-0">1</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Price</p>
                      <p className="lead fw-normal mb-0"> 799 Dt </p>
                    </div>
                  </MDBCol>
                  
                 
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    
                    <span className="lead fw-normal  "><b className='text-center'> Whenever You Need We’re Here For You.</b></span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>

            <div className="d-flex justify-content-end ">
              <MDBBtn color="light" size="lg" className="me-2" href="/">
                Continue shopping
              </MDBBtn>
              <button type="button" className="btn btn-primary btn-lg btn-dark">
              ADD TO CART
            </button>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    <Footer/>
    </div>
  )
}

export default wishlist