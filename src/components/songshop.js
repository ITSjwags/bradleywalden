import React from 'react'

const SongShopPage = ({ active }) => (
  <div className={`Songshop ${active ? 'is-active' : ''}`}>
    <h3>Song Shop</h3>

    <p>
      Ever wanted your own personal song recorded? Maybe a love song for your
      pup? (Please order a love song for your pup).
    </p>
    <p>The Bradley Scott Song Shop is now open!</p>
    <p>
      Whatever you’d like your song to be about, whoever you’d like your song to
      be for, it’s completely up to you! You can help with the lyrics, share
      your story, tell someone how you feel. The sky is the limit!
    </p>

    <p className="Songwriting-disclaimer">
      (You'll receive an email within 24 hours to discuss your song)
    </p>

    <p></p>

    <p className="Songwriting-title">
      <span>Partial Song: $100</span>
      <br />
      1-2 minute piano/acoustic style recording for you by Bradley Scott.
    </p>

    {/* <p className="text-warn">SOLD OUT</p> */}

    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="YW3SZQRSGMMJE" />
      <input
        className="buynow"
        type="image"
        src="http://squidthewhale.com/buynow.png"
        name="submit"
        alt="PayPal - The safer, easier way to pay online!"
      />
      <img
        alt=""
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>

    <p></p>
    <p></p>

    <p className="Songwriting-title">
      <span>Full Song: $200</span>
      <br />
      3-4 minute full length piano/acoustic style recording for you by Bradley
      Scott.
    </p>

    {/* <p className="text-warn">SOLD OUT</p> */}

    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="J695MX56XYQXL" />
      <input
        className="buynow"
        type="image"
        src="http://squidthewhale.com/buynow.png"
        name="submit"
        alt="PayPal - The safer, easier way to pay online!"
      />
      <img
        alt=""
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>

    <p></p>
    <p></p>

    <p className="Songwriting-title">
      <span>Diamond Song: $375</span>
      <br />
      3-4 minute full length & full production song. Drums, guitar, bass,
      vocals. This is the complete package for you written by Bradley Scott.
    </p>

    {/* <p className="text-warn">SOLD OUT</p> */}

    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="9L7MD4VXU8ZK4" />
      <input
        className="buynow"
        type="image"
        src="http://squidthewhale.com/buynow.png"
        name="submit"
        alt="PayPal - The safer, easier way to pay online!"
      />
      <img
        alt=""
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  </div>
)

export default SongShopPage
