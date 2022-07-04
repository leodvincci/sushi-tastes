import "./App.css"
import logo from "./logo.png"
import SushiCard from "./SushiCard";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {


    const [sushiData,setSushiData] = useState([]);
    const [startVal,setStartVal] = useState(0);
    const [endVal,setEndVal] = useState(3);



    useEffect( ()=>{
        axios({
            method: 'get',
            url: 'https://leos-sushi-api.herokuapp.com/api/v1/sushirolls/',
            responseType: 'stream'
        })
            .then(function (response) {
                const resp =  response.data
                setSushiData( resp  )
            });

    },[] )


    function moveLeft(){
        setStartVal(oldSVal => oldSVal - 3)
        setEndVal(oldEVal => oldEVal - 3)
    }

    function moveRight(){
        setStartVal(oldSVal => oldSVal + 3)
        setEndVal(oldEVal => oldEVal + 3)
    }

    console.log(sushiData)



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


        {
            sushiData.slice(startVal, endVal).map( sushi => (
                    <SushiCard
                        key = {sushi.id}
                        sushiRollName = {sushi.name}
                        sushiRollDescription = {sushi.description}
                    />
            ) )
        }


    </div>

        <div onClick={moveLeft} id={"arrow-left"}>
            <i className="fa-solid fa-chevron-left fa-3x"></i>
        </div>

        <div onClick={moveRight} id={"arrow-right"}>
            <i className="fa-solid fa-chevron-right fa-3x"></i>
        </div>


    </div>
  );
}

export default App;
