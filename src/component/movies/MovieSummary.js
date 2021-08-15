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
            <img src={state} style={{backgroundColor:"black"}} alt="movie_pic"/>
             <div className="titleDiv"><div class="title">{singleMovie.title}</div></div> 
            <div class="genre"> Genres: {singleMovie.genres}</div>
            <div class="description">
            {singleMovie.description.substring(0,50) }...
            </div>
        </div>

    <div class="wrapper" id="card" style={{display:"none"}}  onMouseLeave={(e)=>{
           e.currentTarget.style.display="none"

    }}>
        <div class="main_card">
            <div class="card_left">
                <div class="card_datails">
                    <h1>{singleMovie.title}</h1>
                    <p>Genres: {singleMovie.genres}</p>

                    <p class="disc">{singleMovie.description}</p>
                    <a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>

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