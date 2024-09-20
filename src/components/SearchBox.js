import React from "react";

export default function SearchBox({ setSearchTerm }) {
	function handleChange(e) {
		setSearchTerm(e.target.value);
	}

	return (
		<div>
			<input
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="Search robots"
				onChange={handleChange}
			/>
		</div>
	);
}
