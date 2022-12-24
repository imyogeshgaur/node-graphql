import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../assets/NavBar'
import { ADD_ITEM } from '../graphql/Mutations';

const AddItem = () => {
  const navigate = useNavigate();
  const token = document.cookie.split('=')[1];
  if (token === undefined) {
    navigate("/")
  }
  const [itemName, setitemName] = useState("")
  const [qty, setqty] = useState("")
  const [puchasedItem, { loading, error }] = useMutation(ADD_ITEM)

  if (loading) return (<h1 className='text-center text-primary' style={{ marginTop: "10rem" }}>Loading ....</h1>)
  if (error) console.log(error)

  const handleSubmit = ()=>{
    puchasedItem({
      variables:{itemName,qty}
    })
  }

  return (
    <>
      <NavBar />
      <div className="cardStyle2">
        <div className="card">
          <div className="card-body ">
            <h5 className='card-tilte text-center fw-bold'>Add Item</h5>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Item Name</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Item Name" value={itemName} onChange={(e) => setitemName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Quantity</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Item Quantity" value={qty} onChange={(e) => setqty(e.target.value)} />
            </div>
          </div>
          <button className="btn btn-primary w-50 mx-auto mb-2" onClick={handleSubmit}>Add Item</button>
          <p className='text-center'><Link className="link-danger mx-auto mb-2" style={{ textDecoration: "none" }} to="/home">Back To Home</Link></p>
        </div>
      </div>
    </>
  )
}

export default AddItem