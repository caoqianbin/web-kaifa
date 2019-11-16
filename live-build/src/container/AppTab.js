import React from 'react'
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import Idea from './Idea.js'
import Main from './Main.js'
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'greenTab',
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor=""
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
            }}
            />,
                 
            <img style={{
              width: '22px',
              height: '22px',
              }} src={require('./img/shou1.png')}/>
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
               
              }}   
            />,
            <img style={{
              width: '22px',
              height: '22px',
              }} src={require('./img/shou2.png')}/>
            }                
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
          <Main/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                color:'#3fcccb'
                }}
              />,

              <img style={{
                width: '22px',
                height: '22px',
                }} src={require('./img/li1.png')}/>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                }}
              />,
              <img style={{
                width: '22px',
                height: '22px',
                }} src={require('./img/li2.png')}/>
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}

          >
          <Idea/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                 }}
              />,
              <img style={{
                width: '22px',
                height: '22px',
                }} src={require('./img/sh.png')}/>
              
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                }}
              />,
              <img style={{
                width: '22px',
                height: '22px',
                }} src={require('./img/ang.png')}/>
              
            }
            title="商城"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

