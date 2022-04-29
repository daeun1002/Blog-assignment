import React from 'react'
import DailyPost from '../containpage/DailyPost';
import dailylist from '../data/data';
import './dailycont.css'

const DailyCont = () => {
  return (
    <div className="container">
      <div className="row">
        <ul className="dailyul">
          <DailyPost dailylist={dailylist} />
        </ul>
      </div>
    </div>
  )
}

export default DailyCont