import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { SIGN_UP_USER } from '../graphql/Mutations'

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [createUser] = useMutation(SIGN_UP_USER)

    const handleSubmit = () => {
        try {
            createUser({
                variables: {
                    userInp: { name, email, password }
                },
            })
            alert("User Created !!!")
            setName("")
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="cardStyle">
                <div className="card">
                    <div className="card-body ">
                        <h5 className='card-title text-center fw-bold'>Sign up Here</h5>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="email" className="form-control" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button className="btn btn-primary w-50 mx-auto mb-2" onClick={handleSubmit}>Sign Up</button>
                    <p className='text-center'>Already Have Account ? <Link className="link-danger mx-auto mb-2" style={{ textDecoration: "none" }} to="/">Login Here</Link></p>
                </div>
            </div>
        </>
    )
}

export default Signup