
import React, {Component} from "react";

import "./index.css"
import LoginTool from "../../tool/loginTool";
import {Redirect, Route, Switch} from "react-router-dom";

import NavBar from "../../components/navBar";
import Teacher from "../teacher";
import Course from "../course";
import CourseDetail from "../courseDetail";

class HomePane extends Component {
    render() {
        if (!LoginTool.isLogin) {
            // 如果当前是登录状态, 那么就执行一个重定向操作, 自动跳转到另外一个指定路径
            return <Redirect to={"/login"}/>
        }
        return (
            <div className={"home-pane"}>
                <NavBar/>

                {/* / /teacher /course */}
                <Switch>
                    <Redirect from={"/"} exact to={"/teacher"}/>
                    {/*<Route path={"/"} exact component={Teacher}/>*/}
                    <Route path={"/teacher"} component={Teacher}/>
                    <Route path={"/course"} component={Course}/>
                    <Route path={"/course-detail/:id"} component={CourseDetail}/>
                </Switch>


                {/*<button onClick={() => {*/}
                {/*    LoginTool.logout()*/}
                {/*    this.props.history.replace("/login")*/}
                {/*}}>退出</button>*/}
            </div>
        )
    }
}
export default HomePane;