import React from 'react'
import './login.css'

export default function Register() {
    return (
        <>
            <div className='login'>
                <div className='login-main m-2'>
                    <h3 className='text-center p-2 login-head'>My Money</h3>
                    <div className="login-input">
                        <div className='mt-3'>
                            <div className="form-group mb-3">
                                <label className='text-left'>Enter Username</label>
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <div className="form-group mb-3">
                                <label className='text-left'>Enter Email</label>
                                <input type="email" className="form-control" placeholder="demo@mail.com" aria-describedby="basic-addon1" />
                            </div>

                            <div className="form-group mb-3">
                                <label className='text-left'>Enter Password</label>
                                <input type="password" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                            <div className="form-group mb-3">
                                <label className='text-left'>Conform Password</label>
                                <input type="password" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>

                    <div className="btn-login">
                        <button type="button" className="btn btn-secondary btnlogin">Sign Up</button>
                    </div>
                </div>

                <div className='login-links '>
                    <div>
                        <a href="#" className='login-link'>
                            Alredy registered login here ?
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
