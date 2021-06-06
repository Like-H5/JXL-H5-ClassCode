
import React, {Component} from "react";
import "./index.css"
import {Link, NavLink, withRouter} from "react-router-dom"
class NavBar extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="nav-bar">
                <ul>
                    <li><Link to="/teacher">讲师-Link</Link></li>
                    <li><Link to="/course">课程-Link</Link></li>
                    {/*<li><NavLink activeClassName={"current"} to="/teacher">讲师-NavLink</NavLink></li>*/}
                    {/*<li><NavLink activeClassName={"current"} to="/course">课程-NavLink</NavLink></li>*/}
                    <li><NavLink activeStyle={{fontWeight: "bold", fontsize: 30, color: "red"}} to="/teacher">讲师-NavLink</NavLink></li>
                    <li><NavLink activeStyle={{fontWeight: "bold", fontsize: 30, color: "cyan"}} isActive={(match, location) => {
                        console.log(match, location)
                        if (match) {
                            return true
                        } else {
                            if (location.pathname.startsWith("/course-detail")) {
                                return true
                            }
                            return false
                        }
                    }}  to="/course">课程-NavLink</NavLink></li>
                </ul>
            </div>
        )
    }
}
export default withRouter(NavBar);