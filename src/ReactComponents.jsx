import React, { Component } from 'react';

class ReactComponents extends Component {
    constructor() {
        super()
    }      

    
    render() {        
        return (
        <div>
                <table border="1">
                <tr><td>{this.props.name}</td><td>{this.props.surname}</td><td>{this.props.age}</td><td><button onClick={this.props.showmessage.bind(null,this.props.name)}>PRESS</button></td></tr>
                </table>          
         </div>
        )
    }
}

export default ReactComponents;