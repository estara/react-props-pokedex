import React from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './pokedex';

function App() {
    return(
    <div>
        <Pokedex/>
    </div>);
}

ReactDOM.render(<App/>, document.getElementById("root"));