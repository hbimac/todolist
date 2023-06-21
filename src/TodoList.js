import React, {Component, Fragment} from "react";
import TodoItem from "./TodoItem";
import './App.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [], inputValue: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue], inputValue: ''
        })
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleItemClick(index) {
        const listC = [...this.state.list];
        listC.splice(index, 1);
        this.setState({
            list: listC
        })
    }

    handleDelete(index) {
        const listC = [...this.state.list];
        listC.splice(index, 1);
        this.setState({
            list: listC
        })
    }

    getTodoitems() {
        return (this.state.list.map((item, index) => {
            return <TodoItem delete={this.handleDelete}
                             key={index}
                             content={item}
                             index={index}/>
            // return <li key={index} onClick={this.handleItemClick.bind(this, index)}> {item} </li>
        }))
    }

    //父组件通过属性的形式给子组件传递参数
    //子组件通过props接收父组件传递过来的参数
    render() {
        return (<Fragment>
                <div className="App">
                    <div>
                        <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                        <button onClick={this.handleBtnClick}> Add</button>
                    </div>
                    <ul>{this.getTodoitems()}</ul>
                </div>
            </Fragment>);
    }

}

export default TodoList;