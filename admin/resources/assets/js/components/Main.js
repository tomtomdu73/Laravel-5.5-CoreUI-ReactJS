import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
/* An example React component */
class Main extends Component {
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
 
export default Main;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}