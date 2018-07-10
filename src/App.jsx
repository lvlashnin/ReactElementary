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
      users: [
				{name: 'Коля', surname: 'Иванов'},
				{name: 'Вася', surname: 'Петров'},
				{name: 'Петя', surname: 'Сидоров'},
			]
		}
  }
  showMessage(num) {
    alert(num);
  }
  deleteUser(index) {
		this.state.users.splice(index, 1);
		this.setState({users: this.state.users});
	}
  render() { 
    const list = this.state.users.map((user,index)=>{
      return <ReactComponents key={index} name = {user.name} surname={user.surname} num={index+1} showMessage={this.showMessage.bind(this)} deleteUser={this.deleteUser.bind(this)}/>
    })   
    return (
      <div>
      <Article article = {articles[1]} foo = 'bar'/>
      <States/>    
      <TernarIf/> 
      <ProCycles/>
      {/* <ReactForms/> */}
      <ProReactForms/>
        {list}
      </div>
    );
  }
}

export default App;
