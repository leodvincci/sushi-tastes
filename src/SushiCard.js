import "./App.css"

import {useNavigate} from 'react-router-dom';
function SushiCard(props){

    const navigate = useNavigate();
    const navigateToReview = () => {
        // 👇️ navigate to /contacts
        navigate('/review');
    };

    const navigateToUserReviews = () => {
        // 👇️ navigate to /contacts
        navigate('/userReviews');
    };
    return(

       <div id={"my-card"}>

           {console.log(props.imageLink)}
           <img id={"card-img"} src={props.imageLink} alt="picture of sushi roll"/>

           <div> <p style={{color:"#f77f00",fontFamily:"Montserrat", fontSize:"24px",fontWeight:"550",letterSpacing:"2px",marginBottom:"0px"}}> {props.sushiRollName} </p> </div>

           <div style={{padding:"10px"}}> <p style={{fontFamily:"Roboto",fontWeight:"350",paddingBottom:"10px",color:"#2b2d42"}} > {props.sushiRollDescription}</p> </div>




           <div id={"ratings"} style={{display:"flex",justifyContent:"center",paddingTop:"13px",height:"9%"}}>

               <div style={{paddingRight:"30px"}}>
                   <i id={"yuk"} className="fa-regular fa-face-grin-tongue-squint fa-2xl change-color_2"></i>
                   <p style={{color:"#2b2d42",fontFamily:"Roboto",fontWeight:"600",fontSize:"12px"}}>0</p>
               </div>

               <div style={{paddingRight:"30px"}}>
                   <i id={"yak"} className="fa-regular fa-face-meh fa-2xl change-color_2 "></i>
                   <p style={{color:"#2b2d42",fontFamily:"Roboto",fontWeight:"600",fontSize:"12px"}}>0</p>
               </div>

               <div>
                   <i id={"yum"} className="fa-regular fa-face-smile fa-2xl change-color_2"></i>
                   <p style={{color:"#2b2d42",fontFamily:"Roboto",fontWeight:"600",fontSize:"12px"}}>0</p>
               </div>

           </div>

           <div id={"line"}> </div>
           <div id={"heart-comment"}>

               {/*<div>*/}
               {/*    <i id={"fav-icon"} className="fa-regular fa-heart fa-2x change-color"></i>*/}

               {/*</div>*/}

               <div>
                   <i onClick={navigateToUserReviews} className="fa-solid fa-square-poll-horizontal fa-2x change-color"></i>
               </div>

               <div>
                   <i onClick={navigateToReview} className="fa-regular fa-comment fa-2x change-color"></i>

               </div>

           </div>


       </div>
   )


}

export default SushiCard