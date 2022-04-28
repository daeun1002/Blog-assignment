import React from 'react'
import './header.css'
import { Instagram, Twitter, Facebook } from '@mui/icons-material';
// 안되면 npm install @mui/material @emotion/react @emotion/styled & npm install @mui/icons-material 설치

const Header = () => {
  return (
    <header>
        <div className="container">
          <div className="row d-flex justify-content-between">
            <h3 className="logo">MY BLOG</h3>
            <div className="snsbox">
              <a href="#" className="sns insta"><Instagram style={{fontSize:'28px'}} /></a>
              <a href="#" className="sns twit"><Twitter style={{fontSize:'28px'}} /></a>
              <a href="#" className="sns facebook"><Facebook style={{fontSize:'28px'}} /></a>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header