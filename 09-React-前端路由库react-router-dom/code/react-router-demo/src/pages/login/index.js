import React, {Component} from "react";
import "./index.css"
import LoginTool from "../../tool/loginTool";
import {Redirect} from "react-router-dom"

class LoginPane extends Component {

    _handlerLogin = () => {
        let account = this.accountDOM.value;
        let password = this.passwordDOM.value;
        console.log(account, password)
        let result = LoginTool.login(account, password);
        if (result) {
            // 登录成功 -> 跳转动作 -> 后台首页
            // JS 跳转
            // a    href
            // 如果当前组件是一个"路由组件", 那么它身上就会携带一个路由信息(几个对象)
            this.props.history.replace("/")
        } else {
            alert("账号或者密码错误")
        }
    }

    render() {

        if (LoginTool.isLogin) {
            // 如果当前是登录状态, 那么就执行一个重定向操作, 自动跳转到另外一个指定路径
            return <Redirect to={"/"}/>
        }


        return (
            <div className="login-pane">
                <div className="box">
                    <input ref={dom => this.accountDOM = dom} type="text" placeholder={"请输入账号: "}/>
                    <input ref={dom => this.passwordDOM = dom} type="text" placeholder={"请输入密码: "}/>
                    <input onClick={this._handlerLogin} type="submit" value="登 录"/>
                </div>
            </div>
        )
    }
}

export default LoginPane;