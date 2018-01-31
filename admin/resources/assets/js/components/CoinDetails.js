import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory} from 'react-router';

const CRYPTOCOMPARE_API_URL = "https://www.cryptocompare.com";
const COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";
const UPDATE_INTERVAL = 60*1000;

/* An example React component */
class CoinDetails extends Component {

    constructor(props){

        super(props);
        this.state = {
            requestFailed : false,
        }
    }

    componentDidMount(){
        this.getCoin();
        this.getCoinData();
    }

    getCoin(){
        //API call n1

        fetch(COINMARKETCAP_API_URI + "/v1/ticker/" + this.props.params.coinId)
            .then(response1 => {
                if(response1 == ""){
                    throw Error("Network request failed");
                }
                return response1.json();
            })
            .then(d => {
                this.setState({
                    coinmarketcapData : d[0]
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
            }), () => {
                this.setState({
                    requestFailed : true
                })
            }
    }

    getCoinImage(symbol){

        //Symbol errors 
        if(symbol == "MIOTA"){symbol = "IOT";}

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

    render() {
        if(!this.state.coinmarketcapData && !this.state.crytocompareData) return <p>Loading</p>
        return (

            <span><img src={this.getCoinImage(this.state.coinmarketcapData.symbol)} />{this.props.params.coinId}  et {this.state.coinmarketcapData.symbol}</span>
        )
    }
}
 
export default CoinDetails;
 