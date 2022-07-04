import logo from "./logo.png";


function NavComponent(){

    return(
        <div>

            <nav>
                <img id={"logo-img"} src={logo} alt=""/>

                <ul>
                    <li>Home</li>
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