import React, { Component } from 'react';

class ReactComponents extends Component {
   constructor(props){
       super(props)
       
   }
    
    render() {
        return (
            <div>
            <p>имя: {this.props.name}</p>
			<p>фамилия: {this.props.surname}</p>
            </div>
        )
    }
}

export default ReactComponents;