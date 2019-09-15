import React from "react";
import ReactDOM from "react-dom";
import { config } from '@fortawesome/fontawesome-svg-core'

import Home from "../shared/home";

config.autoAddCss = false;

const root = document.getElementById("root");

// Same as `render()`, but is used to hydrate the HTML contents that were 
// rendered by `ReactDOMServer`. React expects that the rendered content is 
// identical between the server and the client.
ReactDOM.hydrate(<Home name={window.__INITIAL__DATA__} />, root);
