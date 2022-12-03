import React, {Component} from 'react';
import {Card} from "antd";

import Former from './form/index'
import './index.css'
import logo from '../../assets/logo.png'
class Login extends Component {
    state={loding:false}
    render() {

        return (
            <div className="login">
             <Card className="login-container">
                 <img className="login-logo" src={logo} alt=""/>
                 <Former></Former>

             </Card>
            </div>
        );
    }
}

export default Login;