import React, { Component } from 'react';
import './App.css';

class App extends Component {


state = {
  btc: 5131.00,
  eth: 156.57,
  ltc: 72.70,
  xlm: 0.97,
  vet: 0.75

};


componentDidMount() {
  fetch("https://api.coinlore.com/api/tickers/")
    .then(response => response.formData())
    .then(data => {
      console.log("got data", data);
      this.setState({
        apiData:data,
      });
    });
}

  render() {
    console.log("render function is running")
    return (
      <div className="App">
    <div className="Container">
        <p>value of counter: {this.state.counter}</p>
        <p>increase the amount of dogs: {this.state.dogs}</p>
        <div className="Nav">coin price</div>
        <div className="Box">
            <div id="GraphBox">
            </div>
        </div>
        <div className="Footer">
        </div>
        <div className="Coins">
            <div>BTC</div>
            <div>ETH</div>
            <div>LTC</div>
            <div>XLM</div>
            <div>VET</div>
        </div>
        <div id="PriceBox">
        </div>
        <div className="BottomFoot">
        </div>
        <div className="Button">
            <button onClick={() => this.doFetch()}> Update Coin Data </button>

            <button onClick={this.incrementCounter} >Click me to increment counter</button>

            <button onClick={this.incrementDogCounter} >Click this to increment dog count</button>
        </div>
        <section id="output">
        </section>
    </div>

    <script src="main.js"></script>

      </div>
    );
  }
}

export default App;
