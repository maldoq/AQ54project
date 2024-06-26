import "../../static/home/Navbar.css"

const NavBar = () =>{

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
            dominiquemalik20@gmail.com
            </p>
    </nav>
};

export default NavBar;