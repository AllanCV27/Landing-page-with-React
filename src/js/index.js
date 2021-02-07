//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "./component/index.css";

//import your own components

import { NavBar } from "./component/navbar";
import { Content } from "./component/content.js";
import { Footer } from "./component/footer.js";

//render your react application
ReactDOM.render(
	<div className>
		<NavBar />
		<div className="bodyP">
			<Content />
		</div>
		<br />
		<Footer />
	</div>,
	document.querySelector("#app")
);
