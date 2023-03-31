import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {result: 0, heads: 0, tails: 0}

  onClicked = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({result: tossResult})
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const imageArray = [
      'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    ]
    const {result, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="subheading">Heads (or) Tails</p>
          <div>
            <img src={imageArray[result]} alt="toss result" className="image" />
          </div>
          <button type="button" onClick={this.onClicked}>
            Toss Coin
          </button>
          <div className="score-container">
            <p className="score">Total: {heads + tails}</p>
            <p className="score part">Heads: {heads}</p>
            <p className="score">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
