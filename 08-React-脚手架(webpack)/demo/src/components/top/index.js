
import React from "react";
import "./index.less"
class Top extends React.Component {
    _handlerKeyDown = (evt) => {
        if (evt.key === "Enter") {

            let val = this.inputDOM.value;
            // console.log("回车", val);
            this.props.addFunc(val)
            this.inputDOM.value = ""
        }
    }
    render() {
        return (
            <div className="top">
                <label>
                    <input ref={ele=>this.inputDOM = ele} onKeyDown={this._handlerKeyDown} type="text" placeholder="请输入内容, 回车技术"/>
                </label>
            </div>
        )
    }
}
export default Top;