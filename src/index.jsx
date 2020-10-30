import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bundleId: 1,
      countdown: 1400,
      tierCosts: {
        tier1: 1,
        tier2: 3,
        tier3: 10,
      }
    }
  }

  render() {
    return (
      <div id="navbar" className="moving-navbar">
        <div id="bell" className="bell moving-navbar-button">
          B
        </div>
        <div className="countdown-container moving-navbar-button">
          <div id="countdown" className="">
            <div className="days blocky-countdown">
              <div className="countdown-number">
                30
              </div>
              <div className="countdown-word">
                days
              </div>
            </div>
            <div className="hours blocky-countdown">
              <div className="countdown-number">
                23
              </div>
              <div className="countdown-word">
                hours
              </div>
            </div>
            <div className="minutes blocky-countdown">
              <div className="countdown-number">
                59
              </div>
              <div className="countdown-word">
                min
              </div>
            </div>
            <div className="seconds blocky-countdown">
              <div className="countdown-number">
                59
              </div>
              <div className="countdown-word">
                sec
              </div>
            </div>
          </div>
        </div>
        <div id="tier1" className="cost moving-navbar-button no-style">Pay $1.00+</div>
        <div id="tier2" className="cost moving-navbar-button no-style">Pay $3.00+</div>
        <div id="tier3" className="cost moving-navbar-button no-style">Pay $10.00+</div>
        <div id="charity" className="moving-navbar-button no-style" >Charity</div>
        <div id="stats" className="moving-navbar-button no-style">Stats</div>
        <div id="pay-button" className="purchase-button button-green">Pay What You Want!</div>
      </div>
    )
  }
};

ReactDOM.render(<Navbar />, document.getElementById('Navbar'));
