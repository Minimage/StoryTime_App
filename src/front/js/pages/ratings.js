import React from "react";
import  Rate  from "../component/rate.js"
import { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/ratings.css"



export const Ratings = () => {
    const [rating, setRating] = useState(0)
    return (
        <div className="background_ratings">
        <div className="Rating_Title">
            <h1> CONGRATULATIONS CHALLENGES COMPLETED!</h1>
            <h3>GET READY FOR THE NEXT STORIES </h3>
            <div>
               
                <Rate rating={rating} onRating={(rate) => setRating(rate)} count={5} />
              
                <h3 className="rating_count">Rating - {rating}</h3>
                
                <h1 className="rate_question">Rate us <br/>Share Your Achivements with Story Time</h1>
            </div>
            
        </div>
        </div>
    )
}

export default Ratings



