import React, { Component } from 'react'
import '../index.css'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state ={
              n1:0
        }
    }
    handleInput = (e) =>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
            e.target.value = '';
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:parseInt(e.target.value == '' ? 0 : e.target.value)
        })
    }
    render() {
        return (
            <div>
                <div className="label">
                    <label  htmlFor="inp" id="TodoList">TodoList</label>
                
                <input id="inp" placeholder="添加ToDo"  onChange={this.handleChange} 
                 onKeyDown={(e) => this.handleInput(e)}  type="text"/>
                </div>
            </div>
        )
    }
}
