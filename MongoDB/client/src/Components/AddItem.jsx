import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../assets/NavBar'

const AddItem = () => {
  return (
    <>
      <NavBar />
      <div className="cardStyle">
        <div className="card">
          <div className="card-body ">
            <h5 className='card-tilte text-center fw-bold'>Add Item</h5>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Item Name</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Item Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Quantity</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Item Quantity" />
            </div>
          </div>
          <button className="btn btn-primary w-50 mx-auto mb-2">Add Item</button>
          <p className='text-center'><Link className="link-danger mx-auto mb-2" style={{textDecoration:"none"}} to="/home">Back To Home</Link></p>
        </div>
      </div>
    </>
  )
}

export default AddItem