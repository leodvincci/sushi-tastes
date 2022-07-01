import "./App.css"
import sushi_img from "./fire-roll.jpg"
function SushiCard(){


   return(

       <div id={"my-card"}>

           <img id={"card-img"} src={sushi_img} alt=""/>

           <div> <p style={{fontFamily:"sans-serif", fontSize:"24px",fontWeight:"bolder",marginBottom:"0px"}}> Fire Roll </p> </div>
           <div> <p> <span style={{fontFamily:"sans-serif",fontWeight:"bold"}}>Ingredients</span>: King crab, white fish, tomato, asparagus and tobiko tempura with spicy mayo.</p> </div>

           <div id={"heart-comment"}>

               <div>
                   <i style={{color:"#fc3c18"}} className="fa-regular fa-heart fa-2xl"></i>

               </div>

               <div>
                   <i style={{color:"#fc3c18"}} className="fa-regular fa-comment fa-2xl"></i>

               </div>

           </div>

           <div id={"line"}> </div>


           <div id={"ratings"}>
               <i style={{color:"gold"}} className="fa-solid fa-star fa-2xl"></i>
               <i style={{color:"gold"}} className="fa-solid fa-star fa-2xl"></i>
               <i style={{color:"gold"}} className="fa-solid fa-star fa-2xl"></i>
               <i style={{color:"gold"}} className="fa-regular fa-star fa-2xl"> </i>
           </div>


       </div>
   )


}

export default SushiCard