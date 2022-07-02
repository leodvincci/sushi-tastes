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
              <li>Discover</li>
              <li>Order Sushi</li>
              <li>Favorites</li>
              <div id={"my-icons"}>
                  <i className="fa-solid fa-user fa-2xl"></i>
              </div>

          </ul>

      </nav>

    <div style={{ margin:"40px auto",maxWidth:"80%",width:"auto",display:"flex", justifyContent:"center",alignItems:"center", flexWrap:"wrap"}}>
        <SushiCard/>
        <SushiCard/>
        <SushiCard/>
        <SushiCard/>
        <SushiCard/>
        <SushiCard/>
        <SushiCard/>
        <SushiCard/>
        <SushiCard/>

        <SushiCard/>



    </div>


    </div>
  );
}

export default App;
