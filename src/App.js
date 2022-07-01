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
            <li>Menu</li>
            <li>Delivery</li>
            <li>About</li>
            <li>Reviews</li>
            <li>Contact</li>

            <li>🫀</li>
            <li>🕵️‍♂️</li>
            <li>🛒</li>
          </ul>

      </nav>

    <div style={{ margin:"75px auto", maxWidth:"80%",width:"auto",display:"flex", justifyContent:"center",alignItems:"center", flexWrap:"wrap"}}>
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
