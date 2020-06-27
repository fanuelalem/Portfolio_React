import React from "react";
import "./../css/style.css"
import CardOne from './../../containers/card'
import CardTwo from './../../containers/cardTwo'
import CardThree from './../../containers/cardThree'

function Portfolio() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="portfolio-container">
            

            <h1 className="portfolio-title">Portfolio</h1>
            <div className="cardname"> 
            <CardTwo/>

            <CardThree/>
            <CardOne/>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
