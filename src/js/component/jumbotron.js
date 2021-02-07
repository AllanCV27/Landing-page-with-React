//import react
import React from "react";
import PropTypes from "prop-types";
import { Button } from "bootstrap";

export function Jumbotron(props) {
	return (
		<div className="jumbotron pt-0 justify-content-center margin_left 200px">
			<h1 className="display-4">{props.welcome}</h1>
			<p className="lead">{props.description}</p>
			<p className="lead">
				<button type="button" className="btn btn-primary">
					Call to action!
				</button>
			</p>
		</div>
	);
}

Jumbotron.propTypes = {
	welcome: PropTypes.string,
	description: PropTypes.string
};
