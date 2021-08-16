import React from "react";
import { useState,useEffect } from "react";
import './../../../src/movieStyle.css'

export default function MovieSummary({ singleMovie }) {
const [state, setstate] = useState("");

    useEffect(async () => {
    let url =  await fetchTitleImage(singleMovie.title)
    setstate(url)
    }, [])



  return (
      <div className="myCardContainer" id={singleMovie.uuid}  onClick={(e)=>{

        document.getElementById(e.currentTarget.id).childNodes[1].style.display="block"
    }}>

      {/* <div  >
      <div class="card" style={{width:"18rem"}}>
      <div class="card-body">
        <h5 class="card-title">{singleMovie.title}</h5>
        <p class="card-text">
        <img src={state} style={{height:"100px" ,width:"100px",borderRadius:"100%"}} onClick={(e)=>{
         console.log(e.currentTarget)
        }} />
         {singleMovie.description}
        </p>
        <p class="card-text">
         {singleMovie.genres}
        </p>
        <a href="#" class="btnscss btnscss-primary">
          see the full card
        </a>
      </div>
    </div>
      </div> */}
<div class="myCard">
            <img className="image" src={state} style={{backgroundColor:"black"}} alt="movie_pic"/>
             <div className="titleDiv"><div class="title">{singleMovie.title}</div></div> 
            <div class="genre"> Genres: {singleMovie.genres}</div>
            <div class="description">
            {singleMovie.description.substring(0,50) }...
            </div>
        </div>




        <div class="wrapper myModal" id="card" style={{display:"none"}}  onMouseLeave={(e)=>{
          e.currentTarget.style.display="none";
            
        }}   >
        
        <div class="myMain_card" id="myCard" style={{display:'block'}}  onMouseLeave={(e)=>{
          e.currentTarget.parentElement.style.display="none"
        }} >

            <div className="close" style={{cursor:"pointer", backgroundColor:"green"}}  onClick={(e)=>{
              e.target.parentElement.parentElement.style.display="none"
            }}>
                <div>close</div>
            </div>
            <div class="card_left">
              <div style={{display:"flex"}}>
              <img style={{height:"85px"}}src={state}  ></img>
               <h1 style={{padding:"15px"}}>{singleMovie.title}</h1>

              </div>
              <div>
              <p>Genres: {singleMovie.genres?singleMovie.genres:"none"}</p>
              </div >
                <div class="card_datails">
                    

                    <p style={{height:"fit-content"}}>{singleMovie.description}</p>

                </div>
            </div>
        
        </div>
    </div>






</div>
  );
}

// description: "50 years after decriminalisation of homosexuality in the UK, director Daisy Asquith mines the jewels of the BFI archive to take us into the relationships, desires, fears and expressions of gay men and women in the 20th century."
// genres: ""
// title: "Queerama"
// uuid: "57baf4f4-c9ef-4197-9e4f-acf04eae5b4d"

let fetchTitleImage= async (title)=>{
    
try{
    let name =title
       let p =await fetch("https://ui-avatars.com/api/?name="+`${name}` );
       return p.url
}catch(err){
return err
}

}