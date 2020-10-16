import React from 'react';

export default class Liste extends React.Component {
    render() {
        return (

            
            
                <li className={`border d-flex justify-content-between align-items-center ${this.props.validate === true ? "bg-success" : "bg-light"} ${this.props.showme === false ? "d-none" : ""}`}>
                    <p >{this.props.value}</p>
                    <div className="my-2">
                        <button className="bg-success mr-2" onClick={this.props.valider}><i className="fas fa-check"></i></button>
                        <button className="bg-warning" onClick={this.props.modifier}><i className="fas fa-edit"></i></button>
                        <button className="bg-danger ml-2" onClick={this.props.delete}><i className="fas fa-trash-alt"></i></button>

                    </div>
                </li>
        )
    }
}