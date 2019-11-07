import React, { Component } from 'react'
import '../index.css'
import {Link} from 'react-router-dom';

export default class Topic extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        console.log(this.props);
        console.log(this.props.match);
        console.log(this.props.match.params.page);
        
        fetch('https://cnodejs.org/api/v1/topics?tab=ask&page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
        
    }
    // shouldComponentUpdate(){
        
    // }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page !== this.props.match.params.page)
        {
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?tab=ask&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
            })
        }
        
    }
    render() {
        return (
                
                <ul>
                    
                    {  
                        this.state.data.map((item)=>(  
                            <li className="san">
                                <img src={item.author.avatar_url} alt='' className="tou" />
                                <div  className="xiang1" 
                                dangerouslySetInnerHTML={{__html:item.reply_count}}>
                                </div>
                                <div  className="xiang2" 
                                dangerouslySetInnerHTML={{__html:'/'+item.visit_count}}>
                                </div>
                                <div  className="xiang3" 
                                dangerouslySetInnerHTML={{ __html: '<div>置顶</div>' }}>
                                </div>
                                <Link  to={"/details/"+item.id} className="xiang4" 
                                    dangerouslySetInnerHTML={{__html:item.title}}>
                                </Link>
                                
                
                                <img src={item.author.avatar_url} alt='' className="tou1" />
                                <div className="tou2">8分钟</div>
                            </li>
                            
                        

                        ))
                    }
                    <div>
                        {
                            [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                                <li key={item}><Link to={'/answer/'+item} className="biao">{item}</Link></li>   
                            ))
                        }
                        
                    </div>
                </ul>
          
        )
    }
}