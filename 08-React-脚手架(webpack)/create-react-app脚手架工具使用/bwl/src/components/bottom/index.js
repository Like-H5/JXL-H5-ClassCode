import React from "react";
import "./index.less"

class Bottom extends React.Component {
    render() {
        const {finishedCount, totalCount} = this.props;
        return (
            <div className="bottom">
                <div className="left">已完成/总共: {finishedCount}/{totalCount}</div>
                <div className="right" onClick={() => {
                    this.props.delFunc()
                }}>清空已完成</div>
            </div>
        )
    }
}

export default Bottom;