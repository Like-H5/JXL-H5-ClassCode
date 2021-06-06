// export default function () {
//     return (
//         <div>关于</div>
//     )
// }

import React from "react";

// import cssM from "../styles/about.module.css"

class About extends React.Component {
    render() {
        // console.log(cssM)
        return (
            <div className={"about"}>关于-CLASS
                {/*<div className={cssM.about}>*/}
                关于-CLASS
                <div style={{width: "100px", height: "100px", backgroundColor: "cyan"}}>盒子</div>
            </div>
        )
    }
}

export default About;