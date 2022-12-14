import React from 'react'

const Navbar = () => {
    return (
        <div className=''>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-body fixed-top"> 
            <img src='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_90/v1671030086/logo_t9hj8u.png'/>
                <div className="container-fluid">
                    <a className="navbar-brand text-dark" href="#">City Suits</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item"></li>

                           <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Clothing</a> </li>

                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Suits</a> </li>
                                <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Accessories</a> </li>
                        </ul>
                        
                        <button className="btn  text-dark" type="submit">
                            <img src='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_30/v1671034527/search_pbo7xn.png'/>
                            </button>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid"> <a className="navbar-brand" href="/">City Suits</a> <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"  ></span> </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item"> <a className="nav-link active" aria-current="page" href="/">Home</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li>
                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false"> Shop </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Mobiles</a></li>
                        <li><a className="dropdown-item" href="#">Laptops</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Accessories</a></li>
                    </ul>
                </li>
            </ul>
            <form className="d-flex"> <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/> <button className="btn btn-outline-success" type="submit">Search</button> </form>
        </div>
    </div>
</nav>


                            <button className="btn  text-dark" type="submit">
                            <img src='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_33/v1671035218/bag_ppahl3.png'/>
                            </button>
                            <button className="btn  text-dark" type="submit">
                            <img src='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_33/v1671035073/user_xzrvuk.png'/>
                            </button>
                            
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar