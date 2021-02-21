import React from "react"
import "./index.css"
import axios from "axios";
export default class Course extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.get("http://lxt.itlike.com/api/client/home/hot_course").then(resp=>{
            console.log(resp)
            this.setState({
                data: resp.data
            })
        })
    }

    render() {
        return (
            <div className={"page"}>
                <h2>这是课程内容</h2>
                <hr/>
                <ul>
                    {this.state.data.map(item=>(
                        <li key={item.course_id}>{item.course_title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}