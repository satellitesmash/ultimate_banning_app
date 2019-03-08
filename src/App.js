import React, { Component } from 'react';
import './App.css';
import Stage from './Stage';
import firebase from 'firebase/app';
import 'firebase/database';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			stageEls: null,
			counterpick: false,
			stageStates: null,
			color: "blue"
		}
	}

	componentDidMount() {
		this.stageRef = firebase.database().ref("stage");
		this.counterpick = firebase.database().ref("state");
		this.stageRef.on("value", (snapshot) => {
			let values = snapshot.val();
			let stageKeys = Object.keys(values);
			let starters = [], counterpicks = [];
			stageKeys.forEach((stage) => {
				let stageValue = values[stage];
				let stageEl = <Stage key={stageValue.name} stage={stageValue.name} bannedColor={stageValue.value} callback={() => this.alterState(stage, stageValue.value)} />;
				if (stageValue.counterpick) {
					counterpicks.push(stageEl);
				} else {
					starters.push(stageEl);
				}
			});
			this.setState({
				counterpicks: counterpicks,
				starters: starters,
				stageStates: values
			});
		});
		this.counterpick.on("value", (snapshot) => {
			let value = snapshot.val();
			this.setState({
				counterpick: value === "starter" ? false : true
			});
		});
	}

	componentWillUnmount() {
		this.stageRef.off();
		this.counterpick.off();
	}

	alterState = (id, lastValue) => {
		let value = lastValue === "blue" ? "none" : "blue";
		let dataObject = {
			value: value
		};
		this.stageRef.child(id).update(dataObject);
	}

	render() {
		const { starters, counterpick, counterpicks } = this.state;
		return (
			<div className="App">
				<div id="stage-container">
					{starters}
					{counterpick &&
						counterpicks
					}
				</div>
			</div>
		);
	}
}