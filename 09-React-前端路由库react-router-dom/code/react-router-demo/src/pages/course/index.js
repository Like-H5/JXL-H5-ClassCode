import React, {Component} from "react";
import "./index.css"
import {Link} from "react-router-dom";
class Course extends Component {
    state = {
        items: [
            {id: 1, title: "课程标题-1"},
            {id: 2, title: "课程标题-2"},
            {id: 3, title: "课程标题-3"},
            {id: 4, title: "课程标题-4"}
        ]
    }
    render() {
        return (
            <div className={"course"}>
                课程页面
                <ul>
                    {this.state.items.map(item => <li key={item.id}>
                        {/*<Link to={`/course-detail/${item.id}`}>{item.title}</Link>*/}
                        <Link to={
                            {
                                pathname: `/course-detail/${item.id}`,
                                data: {
                                    sz_id: "123123123"
                                }
                            }

                        }>{item.title}</Link>
                    </li>)}
                </ul>
            </div>
        )
    }
}
export default Course;