import "../../static/home/Navbar.css"

const NavBar = ({ userEmail }) =>{

    return <nav>
        <p className="logo">
            <strong>
                <span>AQ</span>54
            </strong>- Air Quality
        </p>
        <ul>
            <li className="active">Home</li>
            <li>Air Map</li>
        </ul>
        <p className="account">
            {userEmail || "Not logged in"}
            </p>
    </nav>
};

export default NavBar;