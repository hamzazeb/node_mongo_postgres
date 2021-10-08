import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../assets/login.css';

const LoginUi = () => {
    return (
        <Fragment>
            <div className='login-page'>
                <div className='form'>
                    <form className='login-form'>
                        <input type="text" placeholder="username"></input>
                        <input type="password" placeholder="password"></input>
                        <button>Login</button>
                        <p className='message'><Link to='/password/recover'>Forgot Password?</Link></p>
                        <p className='message'>Not registered? <Link to='/register'>Create an account</Link></p>
                    </form>

                </div>
            </div>
        </Fragment>
    )
}

export default LoginUi