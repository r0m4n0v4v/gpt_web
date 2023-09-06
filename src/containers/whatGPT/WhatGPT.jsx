import React from 'react'
import './whatGPT.css'
import { Feature } from '../../components'

const WhatGPT = () => {
  return (
    <div className='gpt__whatgpt section__margin' id='wgpt'>
      <div className='gpt__whatgpt-feature'>
        <Feature title='What is GPT' text='An artificial intelligence chatbot developed by OpenAI and capable of dialogue mode, supporting natural language queries. ChatGPT is a large language model that has been trained using teacher learning and reinforcement learning methods.'/>
      </div>
      <div className='gpt__whatgpt-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt__whatgpt-container'>
        <Feature title='Chatbots' text='GPT is designed as a chatbot, which makes communication with it much easier.'/>
        <Feature title='Knowledgebase' text='GPT has an embedded knowledge base, accumulated over decades by scientists and programmers from all over the world.'/>
        <Feature title='Education' text='You can learn and develop together with GPT, because he will not only suggest the right solution, but also explain it.' />
      </div>
    </div>
  )
}

export default WhatGPT