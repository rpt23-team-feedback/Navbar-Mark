import React from 'react';
import './bundle.css';

const awsTopContributorsURL = '';
const awsTiersURL = 'http://3.15.215.14:3101/';
const awsDescriptionURL = 'http://54.193.6.166:3663/';

class Bundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bundleId: parseInt(this.props.match.params.bundleId),
      countdown: 1050023,
      tierCosts: {
        tier1: 1,
        tier2: 3,
        tier3: ((Math.floor(this.props.match.params.bundleId / 25) + 1) * 5),
      }
    }

    this.getCountdown = this.getCountdown.bind(this);
    this.getAverageCost = this.getAverageCost.bind(this);
    this.getTopCost = this.getTopCost.bind(this);

    this.getCountdown;
    this.getAverageCost;
    this.getTopCost;
  }

  getCountdown() {
    var bundleId = this.state.bundleId;


    $.ajax({
      method: 'GET',
      url: `${awsDescriptionURL}bundleInfo/${bundleId.id}`,
      datatype: 'json',
      success: (data) => {
        this.setState({
          countdown: data.timesUp,
        })
      }
    })
  }

  getAverageCost() {
    var bundleId = this.state.bundleId;
    if (bundleId < 1 || bundleId > 100) {
      this.setState({
        tierCosts: {
          tier2: 3,
        },
      })
    }

    $.ajax({
      method: 'GET',
      url: `${awsTopContributorsURL}averageSale/${bundleId}`,
      datatype: 'json',
      success: (data) => {
        this.setState({
          tierCosts: {
            tier2: data.Numbers.averageSale,
          },
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  getTopCost() {
    var bundleId = this.state.bundleId;
    if (bundleId < 1 || bundleId > 100) {
      this.setState({
        tierCosts: {
          tier3: 25,
        },
      });
    }

    $.ajax({
      method: 'GET',
      url: `${awsTiersURL}tiersIncluded/${bundleId}`,
      datatype: 'json',
      success: (data) => {
        this.setState({
          tierCosts: {
            tier3: data.tier3Cost,
          },
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  render() {
    let seconds = this.state.countdown;

    const days = Math.floor(seconds / 86400);
    seconds -= days * 86400;
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    return (
      <div id="navbar" className="moving-navbar">
        <div id="bell" className="bell moving-navbar-button">
          B
        </div>
        <div className="countdown-container moving-navbar-button">
          <div id="countdown" className="days blocky-countdown">
            <div className="days">
              <div className="countdown-number">
                {days}
              </div>
              <div className="countdown-word">
                days
              </div>
            </div>
            <div className="hours">
              <div className="countdown-number">
                {hours}
              </div>
              <div className="countdown-word">
                hours
              </div>
            </div>
            <div className="minutes">
              <div className="countdown-number">
                {minutes}
              </div>
              <div className="countdown-word">
                min
              </div>
            </div>
            <div className="seconds">
              <div className="countdown-number">
                {seconds}
              </div>
              <div className="countdown-word">
                sec
              </div>
            </div>
          </div>
        </div>
        <div id="tier1" className="cost moving-navbar-button no-style">Pay ${this.state.tierCosts.tier1}.00+</div>
        <div id="tier2" className="cost moving-navbar-button no-style">Pay ${this.state.tierCosts.tier2}.00+</div>
        <div id="tier3" className="cost moving-navbar-button no-style">Pay ${this.state.tierCosts.tier3}.00+</div>
        <div id="charity" className="moving-navbar-button no-style" >Charity</div>
        <div id="stats" className="moving-navbar-button no-style">Stats</div>
        <div id="pay-button" className="purchase-button button-green">Pay What You Want!</div>
      </div>
    )
  }
};

export default Bundle;
