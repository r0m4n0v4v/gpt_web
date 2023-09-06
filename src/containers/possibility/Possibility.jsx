import React from 'react'
import possibilityImage from '../../assets/possibilityImage.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className="gpt__possibility section__padding" id="possibility">
    <div className="gpt__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Apparently, it is not for nothing that Microsoft invested more than $10,000,000,000 in the company OpenAI, the developer of the ChatGPT chatbot. According to various reviews, it is even capable of retelling materials, making plans, including for trading, translating texts, and filling in briefs.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
  )
}

export default Possibility