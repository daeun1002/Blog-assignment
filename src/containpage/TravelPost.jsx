import React from 'react'
import './travelpost.css'

const TravelPost = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="travelplace">
          <a href="#">JEJU</a>
        </div>
        <div className="travelbox">
          
          <div className="travelcontent d-flex justify-content-between">
            <img src="images/jeju01.jpg" alt="001" />
            <img src="images/jeju02.jpg" alt="002" />
            <img src="images/jeju03.jpg" alt="003" />
            <img src="images/jeju04.jpg" alt="004" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelPost