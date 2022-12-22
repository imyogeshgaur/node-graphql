import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SIGN_IN_USER } from '../graphql/Mutations'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [signInUser] = useMutation(SIGN_IN_USER)
    const navigate = useNavigate();
    const handleSubmit = async () => {
        const data = await signInUser({
            variables: {
                userSignIn: { email, password }
            }
        })
        if (data.data.signInUser.data === "Invalid Credentials !!!") {
            alert(data.data.signInUser.data)
        } else {
            document.cookie = `jwt=${data.data.signInUser.data}`
            navigate("/home")
        }
    }
    return (
        <>
            <div className="cardStyle">
                <div className="card">
                    <div className="card-body ">
                        <h5 className='card-title text-center fw-bold'>Login Here</h5>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button className="btn btn-primary w-50 mx-auto mb-2" onClick={handleSubmit}>Sign In</button>
                    <p className='text-center'>New To Plateform ? <Link className="link-danger mx-auto mb-2" style={{ textDecoration: "none" }} to="/addUser">Sign Up Here</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login