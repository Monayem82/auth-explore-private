import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import UserProvider from '../../contexts/UserProvider';
import { AuthContext, UserContext } from '../../contexts/AuthContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const { userInfoData } = useContext(UserContext)
    const navigate = useNavigate()


    const handleLoginSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password)
        console.log(userInfoData)

        if (email === userInfoData.email && password === userInfoData.password) {
            if (email.length > 0 && password.length > 0) {
                toast.success('Login Successfull', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                navigate('/')
            }
            else{
                toast.error('Enter First')
            }
        } else {
            toast.error('Your Creadintials is wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    return (

        <div className="card bg-base-100 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">

            <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handleLoginSubmit} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Register First <Link className='underline' to='/register'> Register</Link></p>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;