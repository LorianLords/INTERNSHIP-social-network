import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux-store/redux-store";
import {Provider} from "react-redux";

export let rerenderEntireTree = (state) => {
    console.log(store)
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App /*appState={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}*//>
            </Provider>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
