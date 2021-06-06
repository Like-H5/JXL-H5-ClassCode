import React from "react";
import "./index.less"
import Top from "../../components/top";
import Content from "../../components/content";
import Bottom from "../../components/bottom";

class TodoPage extends React.Component {
    state = {
        todoList: [
            {id: 1, title: "吃饭", isFinished: false},
            {id: 2, title: "睡觉", isFinished: true},
            {id: 3, title: "吃着饭睡觉", isFinished: false},
        ]
    }

    // 数据源在哪, 操作数据源的方法, 也应该在哪里
    _addItem = (title) => {
        console.log("拿到标题, 做后续处理", title)
        this.state.todoList.unshift({id: Date.now(), title, isFinished: false})
        this.forceUpdate()
    }
    _editItem = (id, isFinished) => {
        this.state.todoList.find(item=>item.id === id).isFinished = isFinished;
        this.forceUpdate()
    }
    _deleteFinishedItems = () => {
        this.setState({
            todoList: this.state.todoList.filter(item=>!item.isFinished)
        })
    }

    render() {
        const {todoList} = this.state;
        let finishedCount = todoList.filter(item=>item.isFinished).length;
        let totalCount = todoList.length;
        return (
            <div className="page">
                <Top addFunc={this._addItem}/>
                <Content data={todoList} editFunc={this._editItem}/>
                <Bottom finishedCount={finishedCount} totalCount={totalCount} delFunc={this._deleteFinishedItems}/>
            </div>
        )
    }
}
export default TodoPage;

