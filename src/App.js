import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


state = {
  counter: 0,
  dogs: 2,
  people: 5,
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
