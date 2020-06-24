import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import listReducer from "./store/reducers/list";
import App from "./App";
import "./firebase/firebase";

const store =createStore(listReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));