import React, { useState } from "react";
import Cardlist from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

export default function App() {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div className="tc">
			<h1 className="f1">RoboFriends</h1>
			<SearchBox setSearchTerm={setSearchTerm} />
			<Scroll>
				<ErrorBoundry>
					<Cardlist robots={robots} searchTerm={searchTerm} />
				</ErrorBoundry>
			</Scroll>
		</div>
	);
}
