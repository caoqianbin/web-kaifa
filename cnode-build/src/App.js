import React, { Component } from 'react'
import Header from './components/Header'
import {Link} from 'react-router-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './container/Home'
import Api from './container/Api'
import Start from './container/Start'
import About from './container/About'
import Login from './container/Login'
import Details from './container/Details'
import All from './container/All'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className='content'>
                            <Switch>
                                <Route exact path='/' render={()=><Home/>}/>
                                <Route path='/details/:id' component={Details}/>
                                <Route path='/home' component={Home}/>
                                <Route path='/all' component={Home}/>
                                <Route path='/all/:page' component={Home}/>
                                <Route path='/good/:page' component={Home}/>
                                <Route path='/good' component={Home}/>
                                
                                
                                <Route path='/share/:page' component={Home}/>
                                <Route path='/share' component={Home}/>
                                <Route path='/answer/:page' component={Home}/>
                                <Route path='/answer' component={Home}/>
                                <Route path='/recruit/:page' component={Home}/>
                                <Route path='/recruit' component={Home}/>
                                <Route path='/custom' component={Home}/>
                                <Route path='/api' component={Api}/>
                                <Route path='/start' component={Start}/>
                                <Route path='/about' component={About}/>
                                <Route path='/login' component={Login}/>
                            </Switch>
                            
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
