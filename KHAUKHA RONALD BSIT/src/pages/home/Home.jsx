import React from "react";

import Header from "../../components/home/header/Header";
import ExtraInfo from "../../components/home/extraInfo/ExtraInfo";

import "./home.css"

export default function Home() {
	return (
		<>
			<Header />
			<section className="row rol-col-2 extra-info">
				<ExtraInfo heading={"Mission"} text={"🌟 Connect people with the rich literary heritage of East Africa, showcasing a diverse range of narratives, voices, and perspectives. 🌟 Foster a community of passionate readers, writers, and learners, united by a love for literature and a commitment to celebrating our region's unique cultural tapestry. 🌟 Provide engaging, accessible, and thought-provoking content that inspires readers to explore new ideas, challenge their assumptions, and deepen their understanding of the world.."} />
				<ExtraInfo heading={"Why us?"} text={"Discover the finest East African literature, engage with a passionate community, and enjoy exclusive content at The East African Book Haven – your gateway to a captivating literary adventure.Join us on this literary adventure and discover the magic of East African literature today! 📚"} />
        
			</section>
		</>
	);
}
