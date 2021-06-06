import React from "react";
import "./index.less"

class Content extends React.Component {
    _handlerChange = (id, isFinished) => {
        // console.log(id, isFinished)
        this.props.editFunc(id, isFinished)
    }
    render() {
        const {data} = this.props;
        return (
            <div className="content">
                <ul>
                    {data.map(item=>{
                        return <li key={item.id}>
                            <label><input type="checkbox" checked={item.isFinished} onChange={(evt) => {
                                this._handlerChange(item.id, evt.target.checked)
                            }}/>{item.title}</label>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Content;