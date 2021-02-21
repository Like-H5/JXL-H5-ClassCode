import "./index.css"
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div id="nav-bar">
                <ul className="menu">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/course">课程</Link></li>
                    <li><Link to="/teacher">讲师</Link></li>
                    <li><Link to="/article">文章</Link></li>
                </ul>
            </div>
        </>
    )
}