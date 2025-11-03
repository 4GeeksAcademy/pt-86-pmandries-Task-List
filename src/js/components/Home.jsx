import React, {useState} from "react";
import ReactDOM from "react-dom/client";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [tasks, setTasks] = useState([]);
	const [userInput, setUserInput] = useState("");
	const addToList = (task) => {
		let newTask = {label: task, isDone: false}
			setTasks([...tasks, newTask]);
			setUserInput("")
		};

	const markAsDone = (index) => {
		let updatedList = tasks.map((task, i) => {
			if (i == index) {
				return {label: task.label, isDone: !task.isDone}
			}
			else return task;
		})
		setTasks(updatedList)
	}

	const deleteTask = (index) => {
		let updatedList = tasks.filter((task, i) => {
			if (i !== index) {
				return {label: task.label, isDone: task.isDone}
			}
		})
		setTasks(updatedList)
	}

	return (
		<div className="container bg-light">
			<div className = "text-center">
				<h1>Task List</h1>
			</div>
			<div className = "text-center mb-3">
				<input 
					type = "text"
					placeholder = "Add a task here"
					onChange = {(e) => setUserInput(e.target.value)}
					value = {userInput} 
					onKeyDown = {(e) => {
						if (e.key === 'Enter' || e.type ==  'Click') {
							addToList(userInput)
						}
					}
					}
				/>
				<button onClick = {() => addToList(userInput)}>Add to List</button>
			</div>
			<div>
				{tasks.map((task, index) => 
					<div key = {index} className="form-check fs-4 d-flex">
  						<input 
							className = "form-check-input me-2" 
							type="checkbox" 
							value="" 
							id="checkDefault" 
							onChange = {
								() => markAsDone(index)
							}
						/>
  						<label 
							className = {
								task.isDone ? "crossedOut form-check-label": "form-check-label" 
							}
							htmlFor="checkDefault">
    						{task.label}
  						</label>
						<span onClick = {() => deleteTask(index)}>
							&#x2612;
						</span>
					</div>
					)
				}
			</div>
		</div>
	);
};

export default Home;