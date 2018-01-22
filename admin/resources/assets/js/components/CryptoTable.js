import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
const CRYPTOCOMPARE_API_URL = "https://www.cryptocompare.com";
const COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";
const UPDATE_INTERVAL = 60*1000;

/* An example React component */
class CryptoTable extends Component {

    constructor(props){
        super(props)
        this.state = {
            requestFailed : false
        }
    }

    componentDidMount(){

<<<<<<< HEAD:admin/resources/assets/js/components/CoinsTable.js
        fetch(COINMARKETCAP_API_URI + "/v1/ticker/?limit=20")
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
=======
        //AJAX request n1
        // fetch(CRYPTOCOMPARE_API_URL + "/api/data/coinlist")
        //     .then(response => {
        //         if(response["Type"] != 100){
        //             throw Error("Network request failed");
        //         }

        //         return response.json();
        //     })
        //     .then(d => {
        //         this.setState({
        //             crytocompareData : d
        //         });
        //         console.log(d);
        //     }), () => {
        //         this.setState({
        //             requestFailed : true
        //         })
        //     }
>>>>>>> parent of 1511029... display coins OK:admin/resources/assets/js/components/CryptoTable.js

        //AJAX request n2
        fetch(COINMARKETCAP_API_URI + "/v1/ticker/?limit=10")
            .then(response => {
                if(response == ""){
                    throw Error("Network request failed");
                }
                return response.json();
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

<<<<<<< HEAD:admin/resources/assets/js/components/CoinsTable.js
    getCoinImage(symbol){

        //Symbol errors 
        if(symbol == "MIOTA") symbol = "IOT" ;

        try{
            const img = CRYPTOCOMPARE_API_URL+this.state.crytocompareData[symbol]['ImageUrl']
            console.log(img);
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


=======
>>>>>>> parent of 1511029... display coins OK:admin/resources/assets/js/components/CryptoTable.js
    renderCoins() {
        return this.state.coinmarketcapData.map(coin => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                <tr>
                    <td>{coin.rank}</td>
                    <td>{coin.name}</td>
                    <td>{coin.symbol}</td>
                    <td>{coin.price_usd}</td>
                    <td>{coin.percent_change_1h}</td>
                    <td>{coin.percent_change_24h}</td>
                    <td>{coin.percent_change_7d}</td>
                    <td>{coin.market_cap_usd}</td>
                </tr>  
            );
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
 
export default CryptoTable;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
// if (document.getElementById('root')) {
//     ReactDOM.render(<Main />, document.getElementById('root'));
// }