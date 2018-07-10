import React, {Component} from 'react'

export default class State extends Component {
	constructor(){
		super()
		this.state={name: 'Иван',age: 25}		
		this.changePropertys = this.changePropertys.bind(this)
	}
	changePropertys(){
		this.setState({name: 'Koly',age: 30})
	}
	render(){
		return(
			<div >
	        имя:{this.state.name} , возраст:{this.state.age}
			<button onClick={this.changePropertys}>chenge</button>
            </div>
		)
	}
}

// export default class States extends Component {
// 	constructor() {
// 		super();

// 		//Запишем данные в стейт:
// 		this.state = {name: 'Иван', surname: 'Иванов'};
// 		this.showMessage = this.showMessage.bind(this)
// 		this.changeName = this.changeName.bind(this)
// 	}
// 	showMessage() {
// 		alert('Привет!'+ this.state.name)
// 	}
// 	changeName(){
// 		this.setState({name: 'Коля', surname: 'Petrov'});
// 	}

// 	//Выведем данные из стейта:
// 	render() {
// 		return (
// 		<div onClick={this.changeName}>
// 			имя: {this.state.name}, фамилия: {this.state.surname}
// 			<p>имя: {this.state.name}</p>
// 			<button onClick={this.changeName}>сменить имя</button>
// 		</div>)
// 	}
// }