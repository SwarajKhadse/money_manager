import React from 'react'

export default function ForgetPassword() {
    return (
        <>
            <div className='login'>
                <div className='login-main m-2'>
                    <h2 className='text-center p-2 login-head'>My Money</h2>
                    <p className=''>Forget Password</p>
                    <div className="login-input">
                        <div className='mt-3'>
                            <div className="form-group mb-3">
                                <label className='text-left'>Enter Email</label>
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div className="btn-login">
                        <button type="button" className="btn btn-secondary btnlogin">Send Reset Link </button>
                    </div>
                </div>
            </div>
        </>
    )
}