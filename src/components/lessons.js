import React from 'react'

const LessonsPage = ({ active }) => (
  <div className={`Lessons ${active ? 'is-active' : ''}`}>
    <h3>Voice Lessons</h3>

    <p>
      Over the years I’ve given hundreds of people tips, tricks, and walked them
      through the process of growing their voice.
    </p>
    <p>
      Everyone has individual desires, things they want to work on, problems
      that they have. I’m here to help build your confidence and knowledge base
      to help you become the singer you’d like to be!
    </p>
    <p>
      Beginners are more than welcome, everyone has to start somewhere, I did it
      the same as you are now!
    </p>
    <p>Email now for pricing & to set up your first lesson!</p>
  </div>
)

export default LessonsPage
