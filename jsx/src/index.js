// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react Component
const App = () => {
	const labelText = 'Enter your name:';
	const buttonText = {text: 'Click one me!'};
	return (
		<div>
		<label className="label" htmlFor="name">{labelText}</label>
		<input id="name" type="text" />
		<button style={{backgroundColor:'blue', color:'white'}}>{buttonText.text}</button>
		</div>
	)
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));