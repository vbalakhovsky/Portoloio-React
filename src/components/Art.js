import React from 'react'
import nighs from "../Cooler+Nights.jpg";
import laundry from "../Laundry+Night.jpg";
import football from "../Lonely+Football.jpg";
import pears from "../Pears.jpg";
import friends from "../Drinking+with+Friend.jpg"

const Art = () => {
    return (
        <div id="Art" className="container">



<div className="row">
          <div className="col no-padding" >  <img className="art-img" src={nighs}  alt="portfolio pic" /> 
          <p>Cooler Nights</p>
          
          </div>
          
          <div className="col no-padding"><img className="art-img" src={laundry}  alt="portfolio pic"/>
          <p>Laundry</p>
          
          </div>
          
          <div className="w-100"></div>
          <div className="col no-padding"><img  className="art-img" src={football}  alt="portfolio pic"/>
          <p>Lonely Football</p>
          
          </div>
          
          <div className="col no-padding"><img className="art-img"src={pears} alt="portfolio pic"/>
          
            <p>Pears </p>
          </div>
         
          <div className="col no-padding"><img className="art-img"src={friends} alt="portfolio pic"/>
          <p>Drinking with Friend</p>
         
        
             </div>
             </div>
             </div>
             
    )
}

export default Art
