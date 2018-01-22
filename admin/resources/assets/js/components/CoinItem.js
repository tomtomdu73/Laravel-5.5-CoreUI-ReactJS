import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class CoinItem  extends Component {

    constructor(props){
        super(props)
    }

    render() {

        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */

            <tr key={this.props.data.id}>
                <td>{this.props.data.rank}</td>
                <td><img width="15px" src={this.props.image} />  {this.props.data.name}</td>
                <td>{this.props.data.symbol}</td>
                <td>{this.props.data.price_usd}</td>
                <td>{this.props.data.percent_change_1h}%</td>
                <td>{this.props.data.percent_change_24h}%</td>
                <td>{this.props.data.percent_change_7d}%</td>
                <td>{this.props.data.market_cap_usd}</td>
            </tr>  
        );
    }
}
 
export default CoinItem;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
// if (document.getElementById('root')) {
//     ReactDOM.render(<Main />, document.getElementById('root'));
// }