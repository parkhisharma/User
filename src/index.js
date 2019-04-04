import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// Redux store can be implemented if required, as it was not part of the document provided hence skipping that.
ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
