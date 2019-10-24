import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'


export default class Todolist extends Component {
    constructor(props){
        super(props);       
        this.state = {
            todo:[],
            todo1:[]
        }     
        this.fun= this.fun.bind(this);
        this.del= this.del.bind(this); 
        console.log(localStorage);
    }
    getSnapshotBeforeUpdate()
    { 
        window.localStorage.setItem('temp',JSON.stringify(this.state));
        return 1;
    }
    componentDidUpdate(){
        
    }
    componentDidMount(){
        //获取缓存的数据 
        var storage = localStorage;
        if(storage.length != 0)
        {
            let todoList = localStorage.getItem("temp");
            let tododo = JSON.parse(todoList);
            // console.log(this.state.todo);
            // console.log(tododo.todo);
            

            var mm = [...this.state.todo];
            var nn = tododo.todo;
            mm.push.apply(mm,nn);
            console.log(mm);
            
            var mmm = [...this.state.todo1];
            var nnn = tododo.todo1;
            mmm.push.apply(mmm,nnn);
            this.setState({
                todo:mm,
                todo1:mmm
            })
        }
        
        
        
        
      
            
    }
    addItem = (msg) =>{
        //this.state.todo.push(msg)
        //当时setState 时 页面才会响应  上面那句话页面不响应
        this.setState({
            todo:[...this.state.todo,msg]
        })
       
    }
    fun(a){
        var todo1 = [...this.state.todo1];
        
        todo1.splice(a,1);
        //2.setState是异步的      
        this.setState(
            {todo1}
        )   

        this.setState({
            todo:[...this.state.todo,this.state.todo1[a]]
        })
        //this.todo.push(this.todo[a]);
        
        console.log(this.state.todo1);
    }  
    del(a){
        var todo = [...this.state.todo];
        todo.splice(a,1);
        //2.setState是异步的      
        this.setState(
            {todo}
        )  
        this.setState({
            todo1:[...this.state.todo1,this.state.todo[a]]
        })
        //this.todo.push(this.todo[a]);
        
        console.log(a);
        console.log(this.state.todo1[a]);
    }   
    delItem = (a) =>{
        //this.state.todo.splice(a,1);//不要写
        //深拷贝/浅拷贝
        //状态(status)
        //1.不要直接改变、处理状态
        var todo = [...this.state.todo];
        todo.splice(a,1);
        //2.setState是异步的      
        this.setState(
            {todo}
        )   
        console.log(a);
    }
    del1 = (a) =>{
        //this.state.todo.splice(a,1);//不要写
        //深拷贝/浅拷贝
        //状态(status)
        //1.不要直接改变、处理状态
        var todo1 = [...this.state.todo1];
        todo1.splice(a,1);
        //2.setState是异步的      
        this.setState(
            {todo1}
        )   
        console.log(a);
    }
    render() {
        return (
            <div>
                <Todoinput addTodo = {this.addItem}/>
                <Todoing delTodo={this.delItem} delTodo1={this.del1} todo = {this.state.todo} 
                todo1 = {this.state.todo1} getFun={this.fun} getDel={this.del}/>
            </div>
        )
    }
}