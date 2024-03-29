import "../css/nav.css"
import { Link } from "react-router-dom"


function NavItem({route, title}){
    return(
        <li className="nav-item">
            <Link to={route}>{title}</Link>
        </li>
    )
}

function Nav(){
    return (
        <nav>
            <ul>
                <NavItem route={"/quiz/flag"} title="Flaggen Quiz" />
                <NavItem route={"/quiz/capital"} title="Hauptstädte Quiz" />
                <NavItem route={"/quiz/borders"} title="Ländergrenzen Quiz" />
                {/* <NavItem route={"/quiz/map"} title="Länder auf Karte zuordnen" /> */}
            </ul>
        </nav>
    )
}

export default Nav