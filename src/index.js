import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./modules";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import ReduxThunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
