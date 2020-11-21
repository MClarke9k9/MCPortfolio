import React, {Component} from "react";
import "./Slider.css";

class Slider extends Component {
	state = {

	}

	componentDidMount(){

	}

	render(){
		return(
			<section id="home" className="slider fullscreen scrollspy">
				<ul className="slides">
					<li>
						<img src="/assets/img/beachpath.jpg" alt="Background 1" />
						<div className="caption center-align">
							<h3 className="black-text text-lighten-2">Welcome to Mark Clarke&apos;s <strong className="red-text">Portfolio</strong>!</h3>
							<h5 className="black-text text-lighten-2 hide-on-small-only"><strong>Here you will find an individual who loves coding! That&apos;s right, I LOVE it!</strong></h5>
						</div>
					</li>
					<li>
						<img src="/assets/img/deskopp.jpg" alt="Background 2" />
						<div className="caption left-align">
							<h3 className="white-text">I work with <strong className="red-text darken-text-4">&quot;Most&quot;</strong> budgets.</h3>
							<h5 className="white-text  hide-on-small-only">If you want quality work for a great price, I'm your guy for the Job!!</h5>
						</div>
					</li>
					<li>
						<img src="/assets/img/background2.jpg" alt="Backgound 3" />
						<div className="caption center-align">
							<h3 className="red-text ">Hire Me Full-Time!</h3>
							<h5 className="black-text hide-on-small-only">I do freelance work as well and I am looking for a full-time job.</h5>
						</div>
					</li>

				</ul>
			</section>
		)
	}
}

export default Slider;

// <li>
// 	<img src="/assets/img/domo5.jpg" alt="MERNster coder" />
// 	<div className="caption right-align">
// 		<h3>The <strong><span className="red-text darken-text-4">MERNster</span></strong> Coder!</h3>
// 		<h5 className="light grey-text text-lighten-5 hide-on-small-only"><strong>Do you even flexbox?!? --Joe Faulstick</strong></h5>
// 	</div>
// </li>