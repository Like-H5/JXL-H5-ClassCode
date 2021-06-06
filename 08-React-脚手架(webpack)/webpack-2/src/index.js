import React from "react"
import ReactDOM from "react-dom"

class Test extends React.Component {
    name = "sz"
    state = {
        num: 123
    }
    render() {
        return <div>
            这是一个test面板3-撩课-sz{this.state.num}
        </div>
    }
}

let arrow = () => {
    console.log(123)
}
arrow()

let v_dom = <Test/>
ReactDOM.render(v_dom, document.getElementById("root"))