import React from 'react'
import './features.css'
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Answer the questions',
    text: 'Like any chatbot, ChatGPT can, of course, answer questions. However, it surpasses the others in terms of depth, giving detailed answers to almost any question, even a special one.',
  },
  {
    title: 'Search is almost like Google',
    text: 'ChatGPT may even replace Google in the long run, because it has an accurate answer to almost every query. The only disadvantage we could find here: it doesn\'t provide links to sources, which is certainly not very convenient. But I think this will be fixed when the bot comes out of test mode and other developers start implementing it.',
  },
  {
    title: 'Writing funny dialogue and stories',
    text: 'ChatGPT impresses with its writing skills as well. The results are really interesting, and it\'s quite fun to read the stories it generates.',
  },
  {
    title: 'Develop simple applications',
    text: 'You can ask ChatGPT for help in creating an application - and it really works. The chatbot will provide sample code that can be used for a particular application, rather than just giving general development advice. However, the code issued by the bot is not yet always usable "as is" (good example below). It will require improvement, but ChatGPT will surely save a lot of time for programmers who no longer need to write something from scratch.',
  },
];

const Features = () => {
  return (
    <div className="gpt__features section__padding" id="features">
      <div className="gpt__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features