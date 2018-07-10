import React, { Component } from 'react';

class ReactComponents extends Component {
    constructor() {
        super()
    }      

    
    render() {        
        return (<div>
           	<p>имя: {this.props.name}</p>
			<p>фамилия: {this.props.surname}</p>
            <button onClick={this.props.showMessage.bind(null, this.props.num)}>
				нажми на меня
			</button>
            </div>
        )
    }
}

export default ReactComponents;