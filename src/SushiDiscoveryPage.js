import SushiCard from "./SushiCard";
import {useEffect, useState} from "react"
import axios from "axios";


function SushiDiscoveryPage(){

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


    return(
        <div>

            <div style={{ margin:"40px auto",maxWidth:"80%",width:"auto",display:"flex", justifyContent:"center",alignItems:"center", flexWrap:"wrap"}}>


                {
                    sushiData.slice(startVal, endVal).map( sushi => (
                        <SushiCard
                            key = {sushi.id}
                            sushiRollName = {sushi.name}
                            sushiRollDescription = {sushi.description}
                            imageLink = {sushi.imgLink}
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
    )

}
export default SushiDiscoveryPage