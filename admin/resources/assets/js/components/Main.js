import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CryptoTable from './CryptoTable.js';

/* An example React component */
class Main extends Component {

    render() {
        return (
            <CryptoTable></CryptoTable>
        );
    }
}
 
export default Main;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}