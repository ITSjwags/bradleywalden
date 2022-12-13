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
    <p>I’m looking forward to creating this keepsake for you.</p>
    <p>(All orders will be shipped within 2-4 weeks)</p>

    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="4H8SQREN8JHRU" />
      <input type="hidden" name="on0" value="Song Choice:" />
      <div className="buynow-inputs">
        <input
          className="buynow-song"
          type="text"
          name="os0"
          maxLength="200"
          placeholder="Song Choice"
        />
        <p className="buynow-price">$85</p>
        <input
          className="buynow"
          type="image"
          src="http://squidthewhale.com/buynow.png"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
      </div>
      <img
        alt=""
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  </div>
)

export default LyricsPage
