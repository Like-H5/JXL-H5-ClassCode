import React from "react"
import "./index.css"
import axios from "axios";
export default class Teacher extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.get("http://lxt.itlike.com/api/client/home/star_teacher").then(resp=>{
            console.log(resp)
            this.setState({
                data: resp.data
            })
        })
    }

    render() {
        return (
            <div className={"page"}>
                <h2>这是讲师内容</h2>
                <hr/>
                <ul>
                    {this.state.data.map(item=>(
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}