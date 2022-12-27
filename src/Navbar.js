import { Link, useMatch, useResolvedPath } from "react-router-dom";


function Navbar() {
   
    return (
        //Navipalkkiin linkit
        <nav className="nav">
            <Link to="/" className="site-title" >The Praetors of New Phyrexia</Link>
            <ul>
                <CustomLink to="/cards">Random card generator</CustomLink>
                <CustomLink to="/query">Query</CustomLink>
             
            </ul>
            
        </nav>
    )
}

//Määritellään mikä osio navipalkissa on aktiivinen
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""} >
            <Link to={to}>{children}</Link>
        </li>
    )
    
}

export default Navbar;