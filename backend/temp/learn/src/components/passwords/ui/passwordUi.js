import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
const PasswordUi=()=>{
    return(
        <Fragment>
            <div class="login-page">
                <div class="form">
                    <form class="login-form">
                    <input type="password" placeholder="new password"/>
                    <input type="password" placeholder="confirm new password"/>
                    <button>change password</button>
                    <p class="message"><Link to="/">Back to Sign In</Link></p>
                    </form>
                </div>
                </div>
        </Fragment>
    )
}

export default PasswordUi