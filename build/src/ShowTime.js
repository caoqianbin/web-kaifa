import React,{Component,Fragment} from 'react';

export default class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            time:new Date().toLocaleString()           
        }       

        setTimeout(() => {
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000)

        this.handleClick = this.handleClick.bind(this);
        console.log('constructor',this.props.word);

    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(){
        return true;//默认能更新
    }

    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
    }

    componentDidUpdate(){
        console.log('DidUpdate');
    }
    handleClick=(num,e) => {
        console.log(num);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(num,e);
    }
    render(){
        console.log('render');
       
        return(
            <Fragment>
                <div onClick={(ev) => {this.handleClick(1,ev)}}>{this.state.time}</div>
                <div onClick={this.divClick.bind(this,333  )}>hello{this.props.word}</div>
            </Fragment> /*不会出现在DOM树中，只是当做一个容器*/           
        )//return每次只能返回一个，，里面套多少都没问题
       
    }
}
//默认导出  只能导出一次
//export default ShowTime

//命名导出  可以写多个export导出多个
//export {ShowTime};
export {ShowTime};
