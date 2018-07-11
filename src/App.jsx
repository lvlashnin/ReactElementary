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
				{name: 'Коля', surname: 'Иванов', age:"24"},
				{name: 'Вася', surname: 'Петров', age:"23"},
        {name: 'Петя', surname: 'Сидоров', age:"27"},
        {name: 'Senya', surname: 'Петров', age:"23"},
				{name: 'Ivan', surname: 'Сидоров', age:"23"},
			]
		}
  }
  showMessage(num){
    alert(num)
  }
  delMessage(index){
    this.state.users.splice(index,1)
    this.setState({users:this.state.users})
  }
  render() { 
    const list = this.state.users.map((user,index)=>{
      return <ReactComponents 
      key={index} 
      name = {user.name} 
      surname={user.surname} 
      age={user.age} 
      showmessage={this.showMessage.bind(this)} 
      num={index+1} 
      index={index}
      delmessage={this.delMessage.bind(this)} />
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
