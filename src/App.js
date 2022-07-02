import "./App.css"
import logo from "./logo.png"
import SushiCard from "./SushiCard";

function App() {
  return (
    <div >



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

    <div style={{ margin:"40px auto",maxWidth:"80%",width:"auto",display:"flex", justifyContent:"center",alignItems:"center", flexWrap:"wrap"}}>



        <SushiCard/>
        <SushiCard/>
        <SushiCard/>

    </div>

        <div id={"arrow-left"}>
            <i className="fa-solid fa-chevron-left fa-3x"></i>
        </div>

        <div id={"arrow-right"}>
            <i className="fa-solid fa-chevron-right fa-3x"></i>
        </div>


    </div>
  );
}

export default App;
