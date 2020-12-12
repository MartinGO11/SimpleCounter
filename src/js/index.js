//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";
import "@fortawesome/fontawesome-free";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="Calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="Hours">{props.digithours % 10}</div>
			<div className="Minutes">{props.digitminutes % 10}</div>
			<div className="Seconds">{props.digitseconds % 10}</div>
			<div className="Miliseconds">{props.digitmiliseconds % 10}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digithours: PropTypes.number,
	digitminutes: PropTypes.number,
	digitseconds: PropTypes.number,
	digitmiliseconds: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const Hours = Math.floor(counter / 1000);
	const Minutes = Math.floor(counter / 100);
	const Seconds = Math.floor(counter / 10);
	const Miliseconds = Math.floor(counter / 1);
	console.log(Hours, Minutes, Seconds, Miliseconds);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digithours={Hours}
			digitminutes={Minutes}
			digitseconds={Seconds}
			digitmiliseconds={Miliseconds}
		/>,
		document.querySelector("#app")
	);
}, 1000);
