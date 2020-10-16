import React from 'react';

export default class Liste2 extends React.Component {
    render() {
        return (
            <li>
                <input value={this.state.input} type="text" />
                <button><i className="fas fa-check"></i></button>
            </li>
        )
    }
}