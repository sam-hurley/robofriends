import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Cardlist({ robots, searchTerm }) {
	const [filter, setFilter] = useState([]);

	useEffect(() => {
		if (searchTerm) {
			const filteredRobots = filter.filter((robot) => {
				return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
			});
			setFilter(filteredRobots);
			return;
		}
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setFilter(users));
	}, [searchTerm]);

	if (!filter.length) {
		return <h1>Loading...</h1>;
	} else {
		return (
			<>
				{filter.map((robot) => {
					return (
						<Card
							key={robot.id}
							id={robot.id}
							name={robot.name}
							email={robot.email}
						/>
					);
				})}
			</>
		);
	}
}
