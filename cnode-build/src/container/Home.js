import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Header1 from '../components/Header1'
import Custom from './Custom'
import Recruit from './Recruit'
import Answer from './Answer'
import Share from './Share'
import Good from './Good'
import All from './All'

export default class Home extends Component {
    render() {
        return (

                <div> 
                    <div className='main1'>
                        <div className='content1'>
                            <Header1/>
                            <Switch>
                                
                                <Route exact path='/' component={All}/>
                                <Route path='/home' component={All}/>
                                <Route path='/all/:page' component={All}/>
                                <Route path='/all' component={All}/>
                                
                                <Route path='/good/:page' component={Good}/>
                                <Route path='/good' component={Good}/>
                                
                                
                                <Route path='/share/:page' component={Share}/>
                                <Route path='/share' component={Share}/>
                                <Route path='/answer/:page' component={Answer}/>
                                <Route path='/answer' component={Answer}/>
                                <Route path='/recruit/:page' component={Recruit}/>
                                <Route path='/recruit' component={Recruit}/>
                                <Route path='/custom' component={Custom}/>
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
      
        )
    }
    
}
