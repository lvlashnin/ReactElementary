import React, { Component } from 'react'
import Article from './Article'
import {articles} from './fixtures'
import States from './States'
import TernarIf from './TernarIf'
import ProCycles from './ProCycles';
// import ReactForms from './ReactForms';
import ProReactForms from './ProReactForms'
import ReactComponents from './ReactComponents';

class App extends Component {
  constructor() {
		super();

		//Храним данные в стейте:
    this.state = {
			users: [
				{name: 'Коля', surname: 'Иванов'},
				{name: 'Вася', surname: 'Петров'},
				{name: 'Петя', surname: 'Сидоров'},
			]
		}
	}
  render() {
    const users = this.state.users.map((item, index) => {
			return <ReactComponents
				key={index}
				name={item.name}
				surname={item.surname}
			/>;
		})
    return (
      <div>
      <Article article = {articles[1]} foo = 'bar'/>
      <States/>    
      <TernarIf/> 
      <ProCycles/>
      {/* <ReactForms/> */}
      <ProReactForms/>
      <ReactComponents/>
      {users}
      </div>
    );
  }
}

export default App;
