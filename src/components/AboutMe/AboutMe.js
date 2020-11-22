import React, {Component} from "react";
import "./AboutMe.css";

class AboutMe extends Component{

	state={
		espurr:false,
		jon:false
	}

	handleClick=(event)=>{
		const {name} = event.target;
		if(this.state[name]){
			this.setState({[name]:false})	
		}
		if(!this.state[name]){
			this.setState({[name]:true})
		}
	}

	render(){
		return(
			<section className="section grey lighten-2 center">
				<div className="container">
					<div className="revealThis card-panel white z-depth-1 about-me-top-margin">
						<div className="row no-margin">
							<div className="col s12 m6 l3">
								<img src="/assets/img/markpic (2).jpg" alt="" className={this.state.jon?"circle responsive-img animated infinite rotate360":"circle responsive-img"} name="jon" onClick={this.handleClick} />
							</div>
							<div className="col s12 m6 l6 left-align">
								<h4 className="no-margin">About <strong className="red-text">Me</strong></h4>
								<p className="">
									Hi! I&apos;m Mark Clarke. I am a full stack developer currently living in South Florida.
								</p>
								<p>
									I enjoy coding for both the front end and the back end. In particular, I enjoy the sense of pride and accomplishment when combining everything into a complete project.
								</p>
								<p className="">
									I am excited to finally pursue my passion for computers, web-development, and coding in general.
								</p>
								<p className="hide-on-med-only hide-on-small-only">
									Outside of coding, I am a pretty plain and normal individual. playing basketball, and just living a simple life.
								</p>
								<p className="hide-on-med-only hide-on-small-only">
									(P.S. Don&apos;t click on my pictures!)
								</p>
							</div>
							<div className="col l3 hide-on-med-only hide-on-small-only">
								<img src="/assets/img/Marks Logo.png" alt="" className={this.state.espurr?"circle responsive-img animated infinite rotate360":"circle responsive-img"} name="espurr" onClick={this.handleClick} />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default AboutMe;