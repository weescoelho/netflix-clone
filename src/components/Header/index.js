import React from 'react'
import './style.css'

const Header = ({scroll}) => {
  return (
    <header className={scroll ? 'scroll--rolled' : ''}>
      <div className="header--logo">
        <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg" alt="Netflix"/></a>
      </div>
      <div className="header--user">
        <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="profile"/>
      </div>
    </header>
  )
}

export default Header

