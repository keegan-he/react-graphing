import React, { Component } from 'react';
import './App.css';

class App extends Component {


  state = {
    btc: '',
    bch: '',
    eth: '',
    ltc: '',
    bnb: '',
    coins: [
      'btc',
      'bch',
      'eth',
      'ltc',
      'bnb',
    ],
  };


  componentDidMount() {
    fetch("https://api.coinlore.com/api/tickers/")
      .then(response => response.json())
      .then(data => {
        console.log('fetched coin data', data);
        this.setState({
          btc: data.data[0].price_usd,
          bch: data.data[3].price_usd,
          eth: data.data[1].price_usd,
          ltc: data.data[4].price_usd,
          bnb: data.data[6].price_usd,
        });
      });
  }

  doFetch = () => {
    console.log('onRefresh method running')
    fetch("https://api.coinlore.com/api/tickers/")
      .then(response => response.json())
      .then(data => {
        console.log('fetched coin data', data);
        this.setState({
          btc: data.data[0].price_usd,
          bch: data.data[3].price_usd,
          eth: data.data[1].price_usd,
          ltc: data.data[4].price_usd,
          bnb: data.data[6].price_usd,
        });
      });
  }

  render() {
    console.log("render function is running")
    return (
      <div className="App">
        <div className="Container">
          <div className="Nav">coinprice</div>
          <div className="Box">
            <div className="GraphBox">
{

  this.state.coins.map(coin => (
    <div class="BarChart-bar" style={{height: coin.percentage + "%"}}>
    {coin.label}
    </div>
  ))
}
            </div>
          </div>
          <div className="Footer">
          </div>
          <div className="Coins">
            <div>BTC price: {this.state.btc}</div>
            <div>ETH price: {this.state.eth}</div>
            <div>LTC price: {this.state.ltc}</div>
            <div>BCH price: {this.state.bch}</div>
            <div>BNB price: {this.state.bnb}</div>
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
