import logo from "./logo.png";
import {Routes, Route, useNavigate} from 'react-router-dom';


function NavComponent(){

    const navigate = useNavigate();
    const navigateToHome = () => {
        // 👇️ navigate to /contacts
        navigate('/');
    };

    return(
        <div>

            <nav>
                <img id={"logo-img"} src={logo} alt=""/>

                <ul>
                    <li onClick={navigateToHome}>Home</li>
                    <li>Order Sushi</li>
                    <div id={"my-icons"}>
                        <i className="fa-solid fa-user fa-2xl"></i>
                    </div>
                </ul>
            </nav>

        </div>
    )

}
export default NavComponent