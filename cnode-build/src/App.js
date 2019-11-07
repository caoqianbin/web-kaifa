import React, { Component } from 'react'
import Header from './components/Header'
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './container/Home'
import Api from './container/Api'
import Start from './container/Start'
import About from './container/About'
import Login from './container/Login'
import Details from './container/Details'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className='content'>
                            
                            <Route exact path='/' component={Home}/>
                            <Route path='/details/:id' component={Details}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/about' component={About}/>
                            <Route path='/login' component={Login}/>
                        </div>
                        <div className="sider">
                            <img src="./img/1.png" alt=""></img>
                            <img src="./img/2.png" alt=""></img>
                           
                        </div>
                        <div className="sider2">
                            <img src="./img/di.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </Router>
            
        )
    }
}
