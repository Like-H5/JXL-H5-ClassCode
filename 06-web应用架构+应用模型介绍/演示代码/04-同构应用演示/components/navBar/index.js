import Link from 'next/link'

export default function NavBar(props) {
    return (
        <>
            <div id="nav-bar">
                <ul className="menu">
                    {props.nav_data.map(item=>{
                        return <li key={item.id}>
                         <Link href={item.route}>{item.title}</Link>
                        </li>
                    })}
                </ul>
            </div>
            <style jsx>
                {`
                  * {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                  }
                  #nav-bar {
                    width: 100%;
                    height: 40px;
                    background-color:#ccc;
                    color: tomato;
                  }
                  .menu {
                    height: 100%;
                    display: flex;
                    width: fit-content;
                  }
                  .menu li {
                    padding: 0 15px;
                    line-height: 40px;
                  }
                `}
            </style>
        </>
    )
}