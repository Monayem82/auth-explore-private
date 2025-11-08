import React from 'react';
import { Link } from 'react-router';

const Register = () => {

    const handleSubmitForm=e=>{
        e.preventDefault()
    }

    return (
        
        <div className="card bg-base-100 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">

            <div className="card-body">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <form onSubmit={handleSubmitForm} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already have an account <Link className='underline' to='/login'> Login</Link></p>
            </div>
        </div>
    );
};

export default Register;