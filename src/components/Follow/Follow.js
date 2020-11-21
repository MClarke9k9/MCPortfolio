import React, {Component} from "react";
import "./Follow.css";

class Follow extends Component {
	render(){
		return(
			<section className="section section-follow black darken-4 white-text center">
				<div className="container">
					<div className="row">
						<div className="col s12">
							<h4>Mark CLarke&apos;s Social Stuff</h4>
							<p>Links to my Github, Instagram, and LinkedIn.</p>
							<a href="https://github.com/MClarke9k9" className="white-text" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-github fa-4x"></i>
							</a>
							<a href="https://www.instagram.com/captianclarke/" className="orange-text" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-instagram fa-4x"></i>
							</a>
							<a href="https://www.linkedin.com/in/mark-clarke-05135a1a8/" className="blue-text" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-linkedin fa-4x"></i>
							</a>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Follow;