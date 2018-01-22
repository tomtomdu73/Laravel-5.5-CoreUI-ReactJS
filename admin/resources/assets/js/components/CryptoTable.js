import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
const CRYPTOCOMPARE_API_URL = "https://www.cryptocompare.com";
const COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";
const UPDATE_INTERVAL = 60*1000;

/* An example React component */
class CryptoTable extends Component {

    componentDidMount(){
        //AJAX request n1
        fetch(CRYPTOCOMPARE_API_URL)
            .then(d => d.json())
            .then(d => {
                this.setState({
                    crytocompareData : d
                })
            })

        //AJAX request n2
        fetch(COINMARKETCAP_API_URI)
            .then(d => d.json())
            .then(d => {
                this.setState({
                    coinmarketcapData : d
                })
            })       
    }

    render() {
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