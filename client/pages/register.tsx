import React from 'react'
// import "../styles/globals.css"


const register = () => {
  return (
    <div className='body'>
      
    
    <div className="container">
    <div >
        <div className="row h-100 col-sm-7 my-auto ">
              <div className="form-login">
                <br />
                <h4 className='h4'>Sign Up</h4>
                <br />
                <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="username"/>
                <br />
                <input type="text" id="email" className="form-control input-sm chat-input" placeholder="email"/>
                <br />
                <input type="text" id="phone" className="form-control input-sm chat-input" placeholder="Phone Number"/>
                <br />
                <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="password"/>
                <br />
                <input type="text" id="role" className="form-control input-sm chat-input" placeholder="Role"/>
                <br />
                <div className="wrapper">
                        <span className="group-btn">
                            <a href="#" className="btn btn-danger btn-md">register <i className="fa fa-sign-in"></i></a>
                        </span>
                </div>
            </div>
        </div>
    </div>
    <br />
</div>
</div>
  )
}

export default register