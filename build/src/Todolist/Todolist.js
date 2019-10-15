import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'



export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[1,2,3]
        }

        //深拷贝
        // var arr = [1,2,{a:100}];
        // var b = JSON.parse(JSON.stringify(arr));
        // b[2].a =200;
        // console.log(arr);

        //对象的拷贝
        var a = {a:100,b:200};
        //var b= {b:100};
        // var o = Object.assign({},a);//将a整合到o
        // console.log(o === a);
        // console.log(o);

        //Object.keys返回由属性名组成的一个数组
        Object.keys(a).forEach((item) => {
            console.log(item);
            console.log(a[item]);
        });
        for(var item in a){
            console.log(a);
        }
    }

    
    

    addItem = (msg) =>{
        //this.state.todo.push(msg)
        //当时setState 时 页面才会响应  上面那句话页面不响应
        this.setState({
            todo:[...this.state.todo,msg]
        })
        console.log(msg);
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
    render() {
        return (
            <div>
                <Todoinput addTodo = {this.addItem}/>
                <Todoing delTodo={this.delItem} todo = {this.state.todo}/>
            </div>
        )
    }
}
