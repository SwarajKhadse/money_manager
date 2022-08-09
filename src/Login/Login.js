import React from 'react'
import './login.css'

export default function Login() {
    return (

       

        <>
        
            <div className='login'>
                <div className='login-main m-2'>
                    <h2 className='text-center p-2 login-head'>My Money</h2>
                    <div className="login-input">
                        <div className='mt-3'>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>

                    <div className="btn-login">
                        <button type="button" className="btn btn-secondary btnlogin">Login</button>
                    </div>
                </div>

                <div className='login-links '>
                    <div>
                        <a href="#" className='login-link'>
                            Forget username ?
                        </a>
                    </div>
                    <div>
                        <a href="#" className='login-link'>
                            Register Here ?
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}
