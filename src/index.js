import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Style
import "normalize.css";
import "typeface-roboto";

//Page
import HomePage from "pages/HomePage";

ReactDOM.render(<HomePage />, document.getElementById("root"));

serviceWorker.register();
