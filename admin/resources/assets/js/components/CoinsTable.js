import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CoinItem from './CoinItem.js';
 
const CRYPTOCOMPARE_API_URL = "https://www.cryptocompare.com";
const COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";
const UPDATE_INTERVAL = 60*1000;

/* An example React component */
class CoinsTable extends Component {

    constructor(props){
        super(props)
        this.state = {
            requestFailed : false
        }
    }

    getCoins(){
        //API call n1

        fetch(COINMARKETCAP_API_URI + "/v1/ticker/?limit=500")
            .then(response1 => {
                if(response1 == ""){
                    throw Error("Network request failed");
                }
                return response1.json();
            })
            .then(d => {
                this.setState({
                    coinmarketcapData : d
                })
            }), () => {
                this.setState({
                    requestFailed : true
                })
            }       
    }

    getCoinData(){
        //AJAX request n2
        fetch(CRYPTOCOMPARE_API_URL + "/api/data/coinlist")
            .then(response2 => {
                if(response2.Response == "Success"){
                    throw Error("Network request failed");
                }

                return response2.json();
            })
            .then(d => {
                this.setState({
                    crytocompareData : d.Data
                });
                console.log(d);
            }), () => {
                this.setState({
                    requestFailed : true
                })
            }
    }

    getCoinImage(symbol){

        //Symbol errors 
        if(symbol == "MIOTA") symbol = "IOT" ;

        try{
            const img = CRYPTOCOMPARE_API_URL + this.state.crytocompareData[symbol]['ImageUrl']

            if(!img) throw "No Picture";
            else return img;
            
        }
        catch(err)
        {
            return err;
        }
      
    }

    componentDidMount(){

        this.getCoins();
        this.getCoinData();
        this.interval = setInterval(this.getCoins.bind(this), UPDATE_INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    renderCoins() {

        return this.state.coinmarketcapData.map(coin => {

            const symbol = coin.symbol;
            const img = this.getCoinImage(symbol);
            return <CoinItem key={coin.name} data = {coin} image = {img} />

        })
    }

    render() {

        if(!this.state.coinmarketcapData) return <p>Loading</p>
        return (
            <div>
                <h3>All Coins</h3>
                <table className="table table-hover">
                    <thead>
                      <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Price (USD)</td>
                        <td>1H</td>
                        <td>1D</td>
                        <td>1W</td>
                        <td>Market Cap (USD)</td>
                      </tr>
                    </thead>
                    <tbody>
                        { this.renderCoins() }
                    </tbody>
                  </table>
            </div>
        );
    }
}
 
export default CoinsTable;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
// if (document.getElementById('root')) {
//     ReactDOM.render(<Main />, document.getElementById('root'));
// }