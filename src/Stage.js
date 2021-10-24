import React, { Component } from 'react';
import './Stage.css';

export default class App extends Component {

    render() {
        let { bannedColor, stage, callback } = this.props;
        return (
            <div key={stage} className="stage" onClick={callback}>
                <div><img className="border" alt={stage} src={`assets/${stage}`}></img></div>
                <div className={`placeholder ${bannedColor}`}></div>
            </div>
        );
    }

}