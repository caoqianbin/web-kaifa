import React, { Component } from 'react'
import {NavBar,Icon,Tabs} from 'antd-mobile'
import { Carousel, WingBlank } from 'antd-mobile';

const tabs2 = [
    { title: '推荐', sub: '1' },
    { title: '冬季', sub: '2' },
    { title: '宜家', sub: '3' },
    { title: '小清新', sub: '4' },
    { title: '小户型', sub: '5' },
    { title: '个性色彩', sub: '6' }
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
                            }} src={require('./img/sou.png')}/>
                    ]}
                >灵感</NavBar>
                
                  <Tabs tabs={tabs2}
                    initialPage={0}
                    //tabBarUnderlineStyle={{border:1 solid green}}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    
                    <div style={{  height: '650px', backgroundColor: '#eeeeee' }}>
                       <img style={{ width:'46%', marginTop:'10px',marginLeft:'10px',height: '200px',float:'left' }} 
                    src={require('./img/6.png')}/>
                         <img style={{ width:'46%', marginTop:'10px', marginLeft:'8px',height: '200px',float:'left' }} 
                    src={require('./img/7.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'10px',height: '200px',float:'left' }} 
                        src={require('./img/8.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'8px',height: '200px', float:'left'}} 
                        src={require('./img/9.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'10px',height: '200px', float:'left'}} 
                        src={require('./img/7.png')}/>
                        <img style={{ width:'46%', marginTop:'10px',marginLeft:'8px',height: '200px', float:'left'}} 
                        src={require('./img/8.png')}/>
                    </div>
                    <div style={{  height: '650px', backgroundColor: '#eeeeee' }}>
                       <img style={{ width:'46%', marginTop:'10px',marginLeft:'10px',height: '200px',float:'left' }} 
                    src={require('./img/6.png')}/>
                         <img style={{ width:'46%', marginTop:'10px', marginLeft:'8px',height: '200px',float:'left' }} 
                    src={require('./img/7.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'10px',height: '200px',float:'left' }} 
                        src={require('./img/8.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'8px',height: '200px', float:'left'}} 
                        src={require('./img/9.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'10px',height: '200px', float:'left'}} 
                        src={require('./img/7.png')}/>
                        <img style={{ width:'46%', marginTop:'10px',marginLeft:'8px',height: '200px', float:'left'}} 
                        src={require('./img/8.png')}/>
                    </div>
                    <div style={{  height: '650px', backgroundColor: '#eeeeee' }}>
                       <img style={{ width:'46%', marginTop:'10px',marginLeft:'10px',height: '200px',float:'left' }} 
                    src={require('./img/6.png')}/>
                         <img style={{ width:'46%', marginTop:'10px', marginLeft:'8px',height: '200px',float:'left' }} 
                    src={require('./img/7.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'10px',height: '200px',float:'left' }} 
                        src={require('./img/8.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'8px',height: '200px', float:'left'}} 
                        src={require('./img/9.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'10px',height: '200px', float:'left'}} 
                        src={require('./img/7.png')}/>
                        <img style={{ width:'46%', marginTop:'10px',marginLeft:'8px',height: '200px', float:'left'}} 
                        src={require('./img/8.png')}/>
                    </div>
                    <div style={{  height: '650px', backgroundColor: '#eeeeee' }}>
                       <img style={{ width:'46%', marginTop:'10px',marginLeft:'10px',height: '200px',float:'left' }} 
                    src={require('./img/6.png')}/>
                         <img style={{ width:'46%', marginTop:'10px', marginLeft:'8px',height: '200px',float:'left' }} 
                    src={require('./img/7.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'10px',height: '200px',float:'left' }} 
                        src={require('./img/8.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'8px',height: '200px', float:'left'}} 
                        src={require('./img/9.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'10px',height: '200px', float:'left'}} 
                        src={require('./img/7.png')}/>
                        <img style={{ width:'46%', marginTop:'10px',marginLeft:'8px',height: '200px', float:'left'}} 
                        src={require('./img/8.png')}/>
                    </div>
                    <div style={{  height: '650px', backgroundColor: '#eeeeee' }}>
                       <img style={{ width:'46%', marginTop:'10px',marginLeft:'10px',height: '200px',float:'left' }} 
                    src={require('./img/6.png')}/>
                         <img style={{ width:'46%', marginTop:'10px', marginLeft:'8px',height: '200px',float:'left' }} 
                    src={require('./img/7.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'10px',height: '200px',float:'left' }} 
                        src={require('./img/8.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'8px',height: '200px', float:'left'}} 
                        src={require('./img/9.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'10px',height: '200px', float:'left'}} 
                        src={require('./img/7.png')}/>
                        <img style={{ width:'46%', marginTop:'10px',marginLeft:'8px',height: '200px', float:'left'}} 
                        src={require('./img/8.png')}/>
                    </div>
                    <div style={{  height: '650px', backgroundColor: '#eeeeee' }}>
                       <img style={{ width:'46%', marginTop:'10px',marginLeft:'10px',height: '200px',float:'left' }} 
                    src={require('./img/6.png')}/>
                         <img style={{ width:'46%', marginTop:'10px', marginLeft:'8px',height: '200px',float:'left' }} 
                    src={require('./img/7.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'10px',height: '200px',float:'left' }} 
                        src={require('./img/8.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'8px',height: '200px', float:'left'}} 
                        src={require('./img/9.png')}/>
                        <img style={{ width:'46%',  marginTop:'10px',marginLeft:'10px',height: '200px', float:'left'}} 
                        src={require('./img/7.png')}/>
                        <img style={{ width:'46%', marginTop:'10px',marginLeft:'8px',height: '200px', float:'left'}} 
                        src={require('./img/8.png')}/>
                    </div>
                </Tabs>  
            </div>
        )
    }
}