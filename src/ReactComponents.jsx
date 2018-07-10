import React, { Component } from 'react';

class ReactComponents extends Component {
    constructor() {
		super();

		//Храним данные в стейте:
    this.state = {
			users: [
				{name: 'Коля', surname: 'Иванов', age:'23'},
				{name: 'Вася', surname: 'Петров', age:'24'},
				{name: 'Петя', surname: 'Сидоров', age:'27'},
			]
		}
	}
    
    render() {
        const list = this.state.users.map((user, index)=>{
            return <p key = {index}>NAME:{user.name},SURNAME:{user.surname},AGE:{user.age}</p>
        })
        return (
            <div>
            {list}
            </div>
        )
    }
}

export default ReactComponents;