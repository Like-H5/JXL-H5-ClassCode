
import LoginPane from "./pages/login";
import HomePane from "./pages/home";
import {HashRouter as Router, Route, Switch} from "react-router-dom"


import "./App.css"

function App() {
  return (
    <div className="App">
        {/*<HashRouter>*/}
        {/*    <Route path={"/login"} component={LoginPane}/>*/}
        {/*    <Route path={"/home"} component={HomePane}/>*/}
        {/*</HashRouter>*/}

        {/*<HashRouter>*/}
        {/*    <Route path={"/login"} render={() =>{*/}
        {/*        return <div>*/}
        {/*            <div>*/}
        {/*                <LoginPane/>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    }}/>*/}
        {/*    <Route path={"/home"}>*/}
        {/*        <HomePane/>*/}
        {/*    </Route>*/}
        {/*</HashRouter>*/}


        {/*<HashRouter>*/}
        {/*    /!**/}
        {/*     1. 如果做路由匹配的时候, 没有添加switch, 就会, 匹配多个路径 /login*/}
        {/*     2. 默认是模糊匹配*/}
        {/*     *!/*/}
        {/*    <Route path={"/login"} component={LoginPane}/>*/}
        {/*    <Route path={"/"} exact component={HomePane}/>*/}
        {/*</HashRouter>*/}

        <Router>
            {/*
             1. 如果做路由匹配的时候, 没有添加switch, 就会, 匹配多个路径 /login
             2. 默认是模糊匹配
             */}

             {/*switch 表示, 只要匹配到一个, 就立即停止, 不会继续匹配*/}
             <Switch>
                 <Route path={"/login"} component={LoginPane}/>
                 <Route path={"/"} component={HomePane}/>
             </Switch>
        </Router>

    </div>
  );
}

export default App;
