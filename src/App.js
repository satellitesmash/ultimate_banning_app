import React, { Component } from 'react';
import './App.css';
import Stage from './Stage';
import firebase from 'firebase/app';
import 'firebase/database';
import { states, resetObj } from './states';

export default class App extends Component {

	constructor(props) {
		super(props);
		let url = new URL(window.location);
		let blankBackground = url.searchParams.get("hide");
		let hide = false;
		if (blankBackground) {
			document.querySelector("body").classList.add("transparent");
			hide = true;
		}
		this.state = {
			stageEls: null,
			counterpick: true,
			stageStates: null,
			loading: true,
			hide: hide
		};
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
				stageStates: values,
			});
		});
		this.counterpick.on("value", (snapshot) => {
			let data = snapshot.val();
			this.setState({
				counterpick: data.value === "starter" ? false : true,
				stateCount: data.count,
				loading: false
			});
		});
	}

	componentWillUnmount() {
		this.stageRef.off();
		this.counterpick.off();
	}

	alterState = (id, lastValue) => {
		const { stateCount, counterpick } = this.state;
		if (lastValue === "none" && ((counterpick && stateCount <= 3) || (!counterpick && stateCount <= 5))) {
			let stateObj = counterpick ? states.counterpick : states.starter;
			let dataObject = {
				value: stateObj["state" + stateCount]
			};
			let dataObject2 = {
				count: stateCount + 1
			};
			this.stageRef.child(id).update(dataObject);
			this.counterpick.update(dataObject2);
		}
	}

	switchMode = () => {
		let dataObj = {
			value: !this.state.counterpick ? "counterpick" : "starter"
		}
		this.counterpick.update(dataObj);
	}

	reset = () => {
		this.counterpick.update({
			count: 1,
			value: "starter"
		});
		this.stageRef.set(resetObj);
	}

	render() {
		const { starters, counterpick, counterpicks, loading, hide } = this.state;
		return (
			<div className="App">
				{loading ?
					<div></div>
					:
					<div>
						<div id="stage-container">
							{starters}
							{counterpick &&
								counterpicks
							}
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
							<div className={hide ? "hide" : ""} style={{ width: '30%'}}>
								<button className="button" style={{ margin: '1rem '}} onClick={this.switchMode}>Swap</button>
								<button className="button" style={{ margin: '1rem '}} onClick={this.reset}>Reset</button>
							</div>
							<div className={hide ? "hide" : ""}>
								<img height={100} alt="pp5-logo" src={require('./pp5.png')}></img>
							</div>
							<div className={hide ? "hide" : ""} style={{ width: '30%', textAlign: 'right' }}>
								<h2 style={{ color: 'white', margin: '1rem' }}>{counterpick ? "counterpick".toUpperCase() : "starter".toUpperCase()}</h2>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}