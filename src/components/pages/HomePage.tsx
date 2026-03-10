import { useLocation } from "react-router";
import FAQ from "../FAQ";
import Features from "../Features";
import Hero from "../Hero";
import HowItWorks from "../HowItWorks";
import UseCases from "../UseCases";
import WhyErrandGo from "../WhyErrandGo";
import { useEffect } from "react";

function HomePage() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace("#", "");
			const el = document.getElementById(id);
			if (el) {
				// Delay to ensure element is mounted
				setTimeout(() => {
					el.scrollIntoView({ behavior: "smooth" });
				}, 200);
			}
		}
	}, [location]);
	return (
		<div>
			<Hero />

			<Features />

			<HowItWorks />

			<UseCases />

			<WhyErrandGo />

			<FAQ />
		</div>
	);
}

export default HomePage;
