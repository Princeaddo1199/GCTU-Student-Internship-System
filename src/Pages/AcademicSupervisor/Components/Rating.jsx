import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../STYLES/Rating.css"

export default function Rating({skills, rating, onChange}) {
  return (
    <div className='ratingMain'>
        <div className="skills">
            {skills}
        </div>
        <div className="rating">
            <div style={{ display: 'flex', gap: '5px' }}>
                {[...Array(5)].map((_, index)=> {
                    const starNumber = index + 1;

                    if (rating >= starNumber) {
                        return <FaStar key={index} color={"gold"} style={{cursor: "pointer"}} onClick={() => onChange(starNumber)}/>
                    }else if (rating >= starNumber - 0.5) {
                        return <FaStarHalfAlt key={index} color={"gold"} style={{cursor: "pointer"}} onClick={() => onChange(starNumber)}/>
                    }else {
                        return <FaRegStar key={index} color={"grey"} style={{cursor: "pointer"}} onClick={() => onChange(starNumber)}/>
                    }
                })}
            </div>
        </div>
    </div>
  )
}
