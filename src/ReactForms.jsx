import React, { Component } from 'react';

export default class ReactForms extends Component {
	constructor(){
		super()
		
	}
	
	render() {
		return (
			<div>
				
			</div>
		)
	}
}

 




























//NO WORKS
	// 	constructor() {
// 		super();
// 		this.state = {
// 					 hrefs: [
// 						{href: '1.html', text: 'ссылка 1'},
// 						{href: '2.html', text: 'ссылка 2'},
// 						{href: '3.html', text: 'ссылка 3'},
// 					]
// 				};
// 	}

// 	render() {
// 		const list = this.state.hrefs.map((item,index)=><li key={index}><a href={item.href}>{item.text}</a></li>)
// 		return <div>
// 			<ul>{list}</ul>
// 			<p>текст инпута: {this.state.hrefs.href} текст инпута 2 : {this.state.hrefs.text}</p>
// 			<form onSubmit={this.addItem.bind(this)}>
// 			<input value={this.state.hrefs.href} onChange={this.handleChange.bind(this)} />
// 			<input value={this.state.hrefs.text} onChange={this.handleChange2.bind(this)} />
// 			<input type='submit'/>
// 			</form>
// 		</div>;
// 	}
// 	handleChange(event) {
// 		this.setState({href: event.target.value	           
// 		});
// 	}
// 	handleChange2(event) {
// 		this.setState({text: event.target.value		           
// 		});
// 	}
// 	addItem(event){
// 		this.state.hrefs.push(this.event.target.value)
// 		this.setState({hrefs:this.state.hrefs})
// 		event.preventDefault()
// 	}
// }























// texts:[{text1: '',
// 					 text2: ''}],








	// 	constructor() {
// 		super();
// 		this.state = {texts:[{text1: '',
// 					 text2: ''}],
// 					 hrefs: [
// 						{href: '1.html', text: 'ссылка 1'},
// 						{href: '2.html', text: 'ссылка 2'},
// 						{href: '3.html', text: 'ссылка 3'},
// 					]
// 				};
// 	}

// 	render() {
// 		const list = this.state.hrefs.map((item,index)=><li key={index}><a href={item.href}>{item.text}</a></li>)
// 		return <div>
// 			<ul>{list}</ul>
// 			<p>текст инпута: {this.state.text1} текст инпута 2 : {this.state.text2}</p>
// 			<form>
// 			<input value={this.state.texts.text1} onChange={this.handleChange.bind(this)} />
// 			<input value={this.state.texts.text2} onChange={this.handleChange2.bind(this)} />
// 			<input type='submit'/>
// 			</form>
// 		</div>;
// 	}
// 	handleChange(event) {
// 		this.setState({text1: event.target.value		           
// 		});
// 	}
// 	handleChange2(event) {
// 		this.setState({text2: event.target.value		           
// 		});
// 	}
// }



	