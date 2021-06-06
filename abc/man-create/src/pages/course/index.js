export default function Course() {
    return (
        <>
            <div className={"course"}>课程列表</div>
            <style global jsx>{`
              .course {
                font-weight: bold;
                font-size: 50px;
                color: green;
              }
              body {
                background-color: grey;
              }
            `}</style>
        </>

    )
}