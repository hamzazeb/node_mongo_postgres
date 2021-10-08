import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from '../login/container/login';
import Register from '../register/container/register';
import Passwords from '../passwords/container/password';
import ProfileUi from '../profile/ui/Profile';

const Routes = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Container>
                        <Route exact path='/' component={Login}></Route>
                        <Route exact path='/register' component={Register}></Route>
                        <Route exact path='/password/recover' component={Passwords}></Route>
                        <Route exact path='/profile' component={ProfileUi}></Route>
                    </Container>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}

export default Routes