import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../../contexts/AuthContext';

const Register = () => {
    const navigate=useNavigate();

    const { userInfoData, setuserInfoData }=useContext(UserContext)
    console.log(userInfoData)

    const handleSubmitForm = e => {
        e.preventDefault()
        const name = e.target.username.value
        const email = e.target.email.value
        const password = e.target.password.value
        if (!name || !email || !password) {
            toast.warn('Field Must Not Empty', {
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
            return
        } else {
            toast('Succesfully Login');
            navigate('/login')
            console.log(name, email, password)
        }
        
        setuserInfoData({
            name,
            email,
            password
        })

    }

    return (

        <div className="card bg-base-100 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
            {/* <ToastContainer /> */}
            <div className="card-body">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <form onSubmit={handleSubmitForm} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" name='username' placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>

                </form>
                <ToastContainer />
                <p>Already have an account <Link className='underline' to='/login'> Login</Link></p>
            </div>
        </div>
    );
};

export default Register;