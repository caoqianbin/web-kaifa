import React, { Component } from 'react'
import {NavBar,Icon,Tabs} from 'antd-mobile'
import { Carousel, WingBlank } from 'antd-mobile';



export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type="img" style={{ marginRight: '16px' }} 
                        />
                       
                    ]}
                >住吧家居</NavBar>
                
                
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    style={{width:'100%',zIndex:'-1',marginTop:'-50px',float:'left'}}>
                    
                    {[1,2].map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: '240px'}}
                        >
                        <img
                            src={require('./img/1.jpg')}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            // window.dispatchEvent(new Event('resize'));
                            // this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel> 
                <div style={{height:'200px',backgroundColor:'#eeeeee',float:'left'}}>
                     <img style={{
                            width: '30%',
                            height: '150px',
                            marginTop:'20px',
                            marginLeft:'12px',
                            float:'left',
                            
                            }} src={require('./img/1-1.png')}/>
               
                    <img style={{
                                width: '30%',
                                height: '150px',
                                marginTop:'20px',
                                marginLeft:'10px',
                                float:'left',
                                
                                }} src={require('./img/2-1.png')}/>
                    
                    <img style={{
                                width: '30%',
                                height: '150px',
                                marginTop:'20px',
                                marginLeft:'10px',
                                float:'left',
                            
                                }} src={require('./img/3-1.png')}/> 
                
                </div>
                <div style={{width:'100%',height:'30px',paddingLeft:'20px',marginLeft:'7px',marginTop:"15px",borderLeft:'5px solid #3fcccb',fontSize:'26px',float:'left'}}>
                    热门推荐
                </div>
                <img style={{
                                width: '100%',
                                height: '200px',
                                marginTop:'20px',
                                
                                float:'left',
                            
                                }} src={require('./img/33.png')}/> 

            </div>
        )
    }
}
