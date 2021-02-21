import React from "react"
import "./index.css"
import axios from "axios";
export default class Article extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.get("http://lxt.itlike.com/api/client/home/last_article").then(resp=>{
            console.log(resp)
            this.setState({
                data: resp.data
            })
        })
    }

    render() {
        return (
            <div className={"page"}>
                <h2>这是文章内容</h2>
                <hr/>
                <ul>
                    {this.state.data.map(item=>(
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}