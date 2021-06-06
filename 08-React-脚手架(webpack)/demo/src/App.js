import React from "react"

import TodoPage from "./pages/todoPage";

class App extends React.Component {
    render() {
        return (
            <div className={"app"}>
                根组件
                <TodoPage/>
            </div>
        )
    }
}

export default App;