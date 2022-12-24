import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../assets/NavBar'
import decode from "jwt-decode"
import { GET_A_USER } from '../graphql/Queries'
import { useQuery } from '@apollo/client'

const Home = () => {
  const navigate = useNavigate();
  const token = document.cookie.split('=')[1];
  if (token === undefined) {
    navigate("/")
  }
  const user_id = decode(token).userId;
  const { loading, error, data } = useQuery(GET_A_USER, {
    variables: {
      _id: user_id
    }
  })

  // console.log(data.user.items[0])

  if (loading) return (<h1 className='text-center text-primary' style={{ marginTop: "10rem" }}>Loading ....</h1>)
  if (error) console.log(error)

  return (
    <>
      <NavBar />
      <div className="cardStyle2">
        <div className="card">
          <div className="card-body ">
            <h5 className='card-tilte text-center fw-bold'>User Data</h5>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" value={data.user.name}
                onChange={(e) => { }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" value={data.user.email}
              onChange={(e) => { }}
              />
            </div>
            {
              data.user.items.map((user) => {
                return (
                  <div key={user}>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Items Purchased</label>
                      <input type="text" className="form-control" id="exampleFormControlInput1"
                      value={user.itemName}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Quantity </label>
                      <input type="text" className="form-control" id="exampleFormControlInput1" 
                      value={user.qty}
                      />
                    </div>
                  </div>
                )
              })
            }
          </div>
          <Link className="btn btn-primary w-50 mx-auto mb-2" to="/addProduct">Add Item</Link>
        </div>
      </div>
    </>
  )
}

export default Home