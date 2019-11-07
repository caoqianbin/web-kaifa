import React, { Component } from 'react'
import '../index.css'
import {Link} from 'react-router-dom';
export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="user">
                    <p>用户名:</p><input type="text" style={{float:"left"}}></input>
                </div>
                <div className="pwd">
                    <p>密码:</p><input type="text"  style={{float:"left"}}></input>
                </div>
                
                <Link to="/home" className="btn">登录</Link>
            </div>
        )
    }
}
