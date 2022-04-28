import React from 'react'
import './dailypost.css'

const DailyPost = () => {
  return (
    <div className="container">
      <div className="row">
        <ul className="dailylist">
          <li className="d-flex" style={{fontSize:'18px'}}>
            <div className="col-1 pl-5">
              <span>1</span>      
            </div>
            <div className="col-9">
              <a href="#" className="daily-title">오늘 날씨가 너무 좋아서 놀러갔다.</a>
            </div>
            <div className="daily-date col-2 pl-5">
              <span>2022.04.28</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DailyPost