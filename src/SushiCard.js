import "./App.css"
import sushi_img from "./fire-roll.jpg"
function SushiCard(){


   return(

       <div id={"my-card"}>

           <img id={"card-img"} src={sushi_img} alt=""/>

           <div> <p style={{color:"#ff330d",fontFamily:"sans-serif", fontSize:"24px",fontWeight:"bolder",marginBottom:"0px"}}> Fire Roll </p> </div>

           <div style={{padding:"10px"}}> <p style={{fontFamily:"Montserrat",fontWeight:"bolder",paddingBottom:"10px"}} > King crab, white fish, tomato, asparagus and tobiko tempura with spicy mayo.</p> </div>




           <div id={"ratings"}>
               <i  className="fa-solid fa-star fa-2xl change-color_2"></i>
               <i  className="fa-solid fa-star fa-2xl change-color_2"></i>
               <i  className="fa-solid fa-star fa-2xl change-color_2"></i>
               <i  className="fa-regular fa-star fa-2xl change-color_2"> </i>
           </div>

           <div id={"line"}> </div>
           <div id={"heart-comment"}>

               <div>
                   <i id={"fav-icon"} className="fa-regular fa-heart fa-2xl change-color"></i>

               </div>

               <div>
                   <i className="fa-regular fa-comment fa-2xl change-color"></i>

               </div>

           </div>


       </div>
   )


}

export default SushiCard