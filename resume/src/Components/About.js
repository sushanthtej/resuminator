import React from 'react'
import "./About.css"

function About() {
  return (
    <>
      <div className='about-head'>About</div>
      <div className='about'>
      This is react resume builder made by MERN KNIGHTS for Hack-R-Play Hackathon organized by prasad v potluri siddartha institute of technology
      and sponsored by codegnan
      
        <div className={"mt-3"}>
          THANK YOU
        </div>
        <a className={"mt-2 anchor-link"} href={"https://github.com/sushanthtej"} target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </>
  )
}

export default About