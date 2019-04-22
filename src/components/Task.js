import React from 'react';
import './Task.css';


class Task extends React.Component{

	state = {text: 'task description', completed: false};

	render() {			

		let className = "";			

		if(this.state.completed) {
			className = "crossed"
		} else {
		}

		return (
		<div className={className}>
			{this.state.text}
		</div>
		);
	};
}

export default Task;