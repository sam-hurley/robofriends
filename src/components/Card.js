import React from "react";

export default function Card({ name, email, id }) {
	return (
		<>
			<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
				<img alt="robots" src={`https://robohash.org/${id}`} />
				<h2>{name}</h2>
				<p>j{email}</p>
			</div>
		</>
	);
}
