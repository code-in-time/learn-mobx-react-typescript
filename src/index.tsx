import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { configureDevtool } from 'mobx-react-devtools';
import { Store } from "./store/Store"
import { Provider } from 'mobx-react';

// // Any configurations are optional
// configureDevtool({
//   // Turn on logging changes button programmatically:
//   logEnabled: true,
//   // Turn off displaying components updates button programmatically:
//   updatesEnabled: false,
//   // Log only changes of type `reaction`
//   // (only affects top-level messages in console, not inside groups)
//   logFilter: change => change.type === 'reaction',
// });


ReactDOM.render(<Provider Store={Store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
