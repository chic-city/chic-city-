import React from 'react'
// import "../styles/globals.css"


const login = () => {
  return (
    // <div className='body'>
      
    
   <center> <div className="container">
    <div >
        <div className="row h-100 col-sm-7 my-auto ">
              <div className="form-login">
                <br />
                <h4 className='h4'>Sign In</h4>
                <br />
                <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="username"/>
                <br />
                <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="password"/>
                <br />
                <div className="wrapper">
                        <span className="group-btn">
                            <a href="#" className="btn btn-danger btn-md">login <i className="fa fa-sign-in"></i></a>
                        </span>
                </div>
            </div>
        </div>
    </div>
    <br />
    {/* <div className="footer text-white text-center">
        <p>©  Walid Slim & Co </p>
    </div> */}
</div></center>
// </div>
  )
}

export default login