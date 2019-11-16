import React, { Component } from 'react'
import {NavBar,Icon,Tabs} from 'antd-mobile'
import { Carousel, WingBlank } from 'antd-mobile';

const tabs2 = [
    { title: '推荐', sub: '1' },
    { title: '家居', sub: '2' },
    { title: '餐厨', sub: '3' },
    { title: '床上用品', sub: '4' }
];


export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type="img" style={{ marginRight: '16px' }} 
                        />
                        ,
                        <img style={{
                            width: '22px',
                            height: '22px',
                            }} src={require('./img/gou.png')}/>
                    ]}
                >商城</NavBar>
                
                 {/* <Tabs tabs={tabs2}
                    initialPage={0}
                    //tabBarUnderlineStyle={{border:1 solid green}}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <img style={{ width:'100%',display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', }} 
                    src={require('./img/1.jpg')}/>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                       推荐
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        
                    </div>
                </Tabs>  */}
                <div style={{width:'100%',height:'50px',backgroundColor:'black',zIndex:'1000',opacity:'0.5',float:'left'}}>
                
                    <img style={{
                                width: '30px',
                                height: '36px',
                                marginLeft:'10px',
                                marginTop:'5px',
                                float:'left'
                                }} src={require('./img/lie.png')}/>
                   
                   
                    <input type="search" placeholder="输入关键字搜索" 
                    style={{width:'300px',height:'30px',marginLeft:'15px',marginTop:'10px',backgroundColor:'#f5e9e2',opacity:'1',float:'left'}}>
                        </input>
                    
                    
                </div>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    style={{width:'100%',zIndex:'-1',marginTop:'-50px',float:'left'}}>
                    
                    {[1,2,3,4].map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: '200px'}}
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
                <div style={{width:'100%',height:'230px',marginTop:'200px',backgroundColor:'white'}}>
                    <img style={{
                                width: '18%',
                                height: '70px',
                                marginLeft:'16px',
                                marginTop:'10px',
                                float:'left'
                                }} src={require('./img/1 (1).jpg')}/>
                    
                    <img style={{
                                 width: '17%',
                                 height: '70px',
                                
                                marginTop:'10px',
                                float:'left'
                                }} src={require('./img/2 (2).jpg')}/>
                   
                    <img style={{
                                  width: '18%',
                                  height: '70px',
                                  marginLeft:'3px',
                                marginTop:'10px',
                                float:'left'
                                }} src={require('./img/1 (3).jpg')}/>
                    
                    <img style={{
                                  width: '17%',
                                  height: '70px',
                                  marginLeft:'3px',
                                marginTop:'10px',
                                float:'left'
                                }} src={require('./img/1 (4).jpg')}/>
                    
                    <img style={{
                                  width: '18%',
                                  height: '70px',
                                  marginLeft:'3px',
                                marginTop:'10px',
                                float:'left'
                                }} src={require('./img/1 (5).jpg')}/>
                    
                    
                    <div style={{float:'left',marginLeft:'45px',fontSize:'18px'}}>桌</div>
                    <div style={{float:'left',marginLeft:'55px',fontSize:'18px'}}>床</div>
                    <div style={{float:'left',marginLeft:'55px',fontSize:'18px'}}>椅</div>
                    <div style={{float:'left',marginLeft:'55px',fontSize:'18px'}}>几</div>
                    <div style={{float:'left',marginLeft:'55px',fontSize:'18px'}}>柜</div>
                    <img style={{
                                  width: '18%',
                                  height: '70px',
                                marginLeft:'16px',
                                marginTop:'10px',
                                float:'left'
                                }} src={require('./img/1 (6).jpg')}/>
                    <img style={{
                                  width: '17%',
                                  height: '70px',
                                
                                marginTop:'10px',
                                float:'left'
                                }} src={require('./img/1 (7).jpg')}/>
                    <img style={{
                                  width: '17%',
                                  height: '70px',
                                  marginLeft:'3px',
                                marginTop:'10px',
                                float:'left'
                                }} src={require('./img/1 (8).jpg')}/>
                    <img style={{
                                  width: '17%',
                                  height: '70px',
                                  marginLeft:'4px',
                                marginTop:'10px',
                                float:'left'
                                }} src={require('./img/1 (9).jpg')}/>
                    <img style={{
                                  width: '17%',
                                  height: '70px',
                                  marginLeft:'5px',
                                marginTop:'10px',
                                float:'left'
                                }} src={require('./img/1 (1).png')}/>
                    <div style={{float:'left',marginLeft:'35px',fontSize:'18px'}}>书架</div>
                    <div style={{float:'left',marginLeft:'35px',fontSize:'18px'}}>沙发</div>
                    <div style={{float:'left',marginLeft:'20px',fontSize:'18px'}}>家居饰品</div>
                    <div style={{float:'left',marginLeft:'2px',fontSize:'18px'}}>户外家居</div>
                    <div style={{float:'left',marginLeft:'2px',fontSize:'18px'}}>全部分类</div>
                </div>
                <div>
                <img style={{
                                  width: '45%',
                                  height: '200px',
                                  marginLeft:'10px',
                                marginTop:'10px',
                                float:'left'
                                }} src={require('./img/5 (1).png')}/>
                <img style={{
                                  width: '45%',
                                  height: '200px',
                                marginLeft:'10px',
                                marginTop:'10px',
                                float:'left'
                                }} src={require('./img/5 (2).png')}/>
                </div>

            </div>
        )
    }
}
