import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../assets/NavBar'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="cardStyle">
        <div class="card">
          <div class="card-body ">
            <h5 className='card-tilte text-center fw-bold'>User Data</h5>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Items Purchased</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
          </div>
          <Link className="btn btn-primary w-50 mx-auto mb-2" to="/addProduct">Add Item</Link>
        </div>
      </div>
    </>
  )
}

export default Home