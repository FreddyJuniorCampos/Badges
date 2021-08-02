import React, { Component } from 'react';
import confLogo from "../images/home.svg"
import techno from "../images/techno.svg"

import "./styles/Home.css"

import {Link} from "react-router-dom"


class Home extends Component {
	render() {
		return (
			<section className="Home">
			
				<section className="Home__hero">
				
					<figure>
						<img src={confLogo} alt="Logo Techno Conf" />						
					</figure>

					<h1 className="Home__Title">
					Techno <br /> Home
					</h1>

					<Link to="/badges" className="btn">
						Start
					</Link>

				</section>
				
				<section className="Home__Icon-container">
				
					<figure>
						<img src={techno} alt="Logo Platzi Badges" className="Home__Icon-image" />						
					</figure>

				</section>
				
			</section>
		);
	}
}

export default Home;