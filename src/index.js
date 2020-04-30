import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store,persistor} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";

import 'react-toastify/dist/ReactToastify.min.css';
import 'ag-grid-community/dist/styles/ag-grid.css';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
            <App />
        </PersistGate>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
