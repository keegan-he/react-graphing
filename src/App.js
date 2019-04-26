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

incrementCounter = () => {
  console.log('counter function running');
  let currentCount = this.state.counter;
  this.setState({
    counter: currentCount +1,
  });
}

  render() {
    console.log("render function is running")
    return (
      <div className="App">
    <div className="Container">
        <p>value of counter: {this.state.counter}</p>
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
