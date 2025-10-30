import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [tasks, setTasks] = useState([]);
	const [userInput, setUserInput] = useState("");
	const addToList = (task) => {
		let newTask = {label: task, isDone: false}
		setTasks([...tasks, newTask]);
		setUserInput("");
	}
	return (
		<div className="container bg-light">
			<div className = "text-center">
				<h1>Task List</h1>
			</div>
			<div className = "text-center mb-3">
				<input onChange = {(e) => setUserInput(e.target.value)} value = {userInput} type = "text" placeholder = "Add a task here" />
				<button onClick = {() => addToList(userInput)}>Add to List</button>
			</div>
			<ul>
				{tasks.map((task, index) => 
//					<li key = {index}>{task.label}</li>
					<div key = {index} className="form-check fs-3">
  						<input className="form-check-input" type="checkbox" value="" id="checkDefault" />
  						<label className="form-check-label" htmlFor="checkDefault">
    						{task.label}
  						</label>
					</div>
					)
				}
			</ul>
			
		</div>
	);
};

export default Home;