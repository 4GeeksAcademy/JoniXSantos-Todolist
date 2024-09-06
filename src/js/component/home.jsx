import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState('');
	const [toDo, setToDo] = useState([]);

	return (
		<div className="container col-4">
			<h1 className="text-center my-3">To Do List</h1>
			<ul>
				<li>
					<input
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								if (inputValue.trim()==="") return
								setToDo(toDo.concat([inputValue]));
								setInputValue('');
							}
						}}
						placeholder="What needs to be done?"
					/>
				</li>
				{toDo.map((task, index) => (
					<li key={index}>
						<div className="d-flex align-items-baseline justify-content-between">
							{task}
							<i className="fas fa-times text-danger" 
						   	onClick={() => setToDo(toDo.filter((_, currentIndex) => index !== currentIndex))}>
							</i>
						</div>
					</li>
				))}
				<li style={{fontSize: "13px"}}>
					{toDo.length} {toDo.length !== 1 ? "items" : "item"} left
				</li>
			</ul>
		</div>
	);
};

export default Home;