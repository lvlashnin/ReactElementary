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
		super()

		this.state = {
      user1: {name: 'Коля', surname: 'Иванов'},
			user2: {name: 'Вася', surname: 'Петров'},
			user3: {name: 'Петя', surname: 'Сидоров'},
		}
  }
  showMessage(num) {
    alert(num);
  }
  render() {    
    return (
      <div>
      <Article article = {articles[1]} foo = 'bar'/>
      <States/>    
      <TernarIf/> 
      <ProCycles/>
      {/* <ReactForms/> */}
      <ProReactForms/>
      <ReactComponents
				name={this.state.user1.name}
				surname={this.state.user1.surname}
				num="1"
				showMessage={this.showMessage.bind(this)}
			/>
			
			<ReactComponents
				name={this.state.user2.name}
				surname={this.state.user2.surname}
				num="2"
				showMessage={this.showMessage.bind(this)}
			/>
			
			<ReactComponents
				name={this.state.user3.name}
				surname={this.state.user3.surname}
				num="3"
				showMessage={this.showMessage.bind(this)}
			/>    
      </div>
    );
  }
}

export default App;
