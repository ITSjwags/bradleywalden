import React from 'react'

const LyricsPage = ({ active }) => (
  <div className={`Lyrics ${active ? 'is-active' : ''}`}>
    <h3>Handwritten Lyrics</h3>

    <p>
      Thank you so much for looking into a handwritten lyric sheet! Over the
      course of my career, I’ve written quite a few songs that have thankfully
      resonated with so many of you. I’d like to give this opportunity to have
      them written out for you, by me.
    </p>
    <p>
      {' '}
      If it’s something from my older days, something from Versus, 131 or Peach
      Club. I’m looking forward to creating this keepsake for you.{' '}
    </p>
    <p>(All orders will be shipped within 2-4 weeks)</p>
  </div>
)

export default LyricsPage
