import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
         <div className="cardStyle">
                <div class="card">
                    <div class="card-body ">
                        <h5 className='card-title text-center fw-bold'>Sign up Here</h5>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Password" />
                        </div>
                    </div>
                    <button className="btn btn-primary w-50 mx-auto mb-2">Sign Up</button>
                    <p className='text-center'>Already Have Account ? <Link className="link-danger mx-auto mb-2" style={{textDecoration:"none"}} to="/">Login Here</Link></p>
                </div>
            </div>
    </>
  )
}

export default Signup