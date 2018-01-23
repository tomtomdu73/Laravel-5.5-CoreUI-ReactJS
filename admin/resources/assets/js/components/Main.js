import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';

import CoinsTable from './CoinsTable.js';
import CoinDetails from './CoinDetails.js';

/* An example React component */
class Main extends Component {

    render() {
        return (
        	<Router history={browserHistory}>
		        <ul className="header">
		            <li><Link to="/">Home</Link></li>
		        </ul>        	
		        <Route path="/" component={CoinsTable}/>
            	<Route path="/coin/:coinId" component={CoinDetails}/>
            </Router>
        );
    }
}
 
export default Main;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}