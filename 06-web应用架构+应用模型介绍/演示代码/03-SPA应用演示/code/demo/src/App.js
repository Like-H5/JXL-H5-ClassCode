import {HashRouter as Router, Route, Switch} from "react-router-dom"
import NavBar from "./components/navBar";
import Home from "./pages/home";
import Course from "./pages/course";
import Teacher from "./pages/teacher";
import Article from "./pages/article";

function App() {

    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Switch>
                    <Route path={"/course"} component={Course}/>
                    <Route path={"/teacher"} component={Teacher}/>
                    <Route path={"/article"} component={Article}/>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}


export default App;
