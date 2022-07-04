import "./App.css"
import sushi_img from "./fire-roll.jpg"
import axios from "axios";
import {useEffect, useState} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
function SushiCard(props){

    const navigate = useNavigate();
    const navigateToReview = () => {
        // 👇️ navigate to /contacts
        navigate('/review');
    };
    return(

       <div id={"my-card"}>

           {console.log(props.imageLink)}
           <img id={"card-img"} src={props.imageLink} alt="picture of sushi roll"/>

           <div> <p style={{color:"#ff330d",fontFamily:"Montserrat", fontSize:"24px",fontWeight:"550",letterSpacing:"2px",marginBottom:"0px"}}> {props.sushiRollName} </p> </div>

           <div style={{padding:"10px"}}> <p style={{fontFamily:"Montserrat",fontWeight:"350",paddingBottom:"10px"}} > {props.sushiRollDescription}</p> </div>




           <div id={"ratings"}>

               <i className="fa-regular fa-face-grin-tongue-squint fa-2xl change-color_2"></i>
               <i className="fa-regular fa-face-meh fa-2xl change-color_2 "></i>
               <i className="fa-regular fa-face-smile fa-2xl change-color_2"></i>

               {/*<i  className="fa-solid fa-star fa-2xl change-color_2"></i>*/}
               {/*<i  className="fa-solid fa-star fa-2xl change-color_2"></i>*/}
               {/*<i  className="fa-solid fa-star fa-2xl change-color_2"></i>*/}
               {/*<i  className="fa-regular fa-star fa-2xl change-color_2"> </i>*/}
           </div>

           <div id={"line"}> </div>
           <div id={"heart-comment"}>

               <div>
                   <i id={"fav-icon"} className="fa-regular fa-heart fa-2xl change-color"></i>

               </div>

               <div>
                   <i onClick={navigateToReview} className="fa-regular fa-comment fa-2xl change-color"></i>

               </div>

           </div>


       </div>
   )


}

export default SushiCard