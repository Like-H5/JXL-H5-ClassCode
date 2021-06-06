import React, {Component} from "react";

import "./index.css"
class CourseDetail extends Component {
    state = {
        data: {

        }
    }
    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.id;
        this.timer = setTimeout(() => {
            this.setState({
                data: {
                    id: 3,
                    title: "xxxx",
                    content: "今天你开心吗??"
                }
            })
        }, 3000)
    }
    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        const {id, title, content} = this.state.data;
        return (
            <div className={"course-detail"}>
                课程详情------
                <h2>{title}</h2>
                <h3>{id}</h3>
                <p>{content}</p>
            </div>
        )
    }
}
export default CourseDetail;