import React, { Component } from 'react'
import Axios from 'axios';

//用类的方式声明一个组件
export default class Request extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    //setState一执行render就重新执行一遍，，页面重新渲染一遍
    //页面加载完了以后执行
    componentDidMount(){
        fetch('https://api.apiopen.top/musicRankingsDetails?type=1')
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{ 
            this.setState({
                data:res.result
            })
            console.log(res);
        })
        // Axios.get('https://api.apiopen.top/musicRankingsDetails?type=1')
        // .then((res) => {
        //     console.log(res);
        //     this.setState({
        //         data:res.data.result
        //     })
        // })
    }
    render() {
        return (
            <div>
                <h1>请求接口</h1>
                <ul>
                    {
                        this.state.data.map(
                            (item,index) => (
                                <li key={index}>
                                    <h2>{item.album_title}</h2>
                                    <p>{item.author}</p>
                                </li>
                            )
                        )
                    }
                    
                </ul>
            </div>
        )
    }
}
