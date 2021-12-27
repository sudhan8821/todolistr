import React, { Component } from 'react'
import "./CreateTask.css";
export default class CreateTask extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tasks:[]
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleClick(evt)
    {
        this.setState({tasks:evt.target.value});
    }
    handleSubmit(evt)
    {
        evt.preventDefault();
        this.props.createTask(this.state.tasks);
        this.setState({tasks:""}); 
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.tasks} onChange={this.handleClick}/>
                    <button className="add">Add Task</button>
                </form>
            </div>
        )
    }
}
