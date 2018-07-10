import React, { Component } from 'react';

export default class ProCycles extends Component {
	constructor(){
		super()
		this.state = {names:['Коля', 'Вася', 'Петя', 'Иван', 'Дима']}		
	}
	addElement(){		
		this.state.names.push('Пункт приема стеклотары---')
		this.setState({names:this.state.names})
	}
	delElement(){
		this.state.names.splice(-1)
		this.setState({names:this.state.names})
	}
	//принимаем индекс из забиндененого события
	delThisElement(index){
		this.state.names.splice(index,1)
		this.setState({names:this.state.names})
	}
	render(){
		const list = this.state.names.map((name,index)=>{
			 return <li key={index}>
				{name} 
				{/* биндим индекс чтоб он был виден внешним функциям */}
				<button onClick={this.delThisElement.bind(this,index)}>
				    PRESS TO DELETE
				</button> 
			</li>
		})
		return(
			<div>	
			<button onClick={this.addElement = this.addElement.bind(this)}>PRESS</button>
			<button onClick={this.delElement = this.delElement.bind(this)}>PRESS TO DELETE LAST</button>
				<ul>
				{list}
				</ul>			
			</div>
		)
	}
}










// 	constructor() {
// 		super();
// 		this.state = {items: [1, 2, 3, 4, 5]};
// 	}

// 	//Удаляем заданный элемент:
// 	deleteItem(index) {
// 		this.state.items.splice(index, 1);
// 		this.setState({items: this.state.items});
// 	}

// 	render() {

// 		//Формируем набор из тегов li:
// 		const list = this.state.items.map((item, index) => {
// 			return <li key={index}>
// 				{item}
// 				<button onClick={this.deleteItem.bind(this, index)}>
// 					удалить
// 				</button>
// 			</li>;
// 		});

// 		return (
// 			<div>
// 				<ul>
// 					{list}
// 				</ul>
// 			</div>
// 		);
// 	}
// }















    //     constructor(props) {
//         super(props);
//         this.state = {items: [1, 2, 3, 4, 5]}
//     }
//     addItem() {
//         this.state.items.push('Point') 
//         this.setState({items: this.state.items})               
//     } 
//     deleteItem(num){
//         this.state.items.splice(num, 1)
//         this.setState({items: this.state.items})
//     } 
//     deletConcrete(){
//         this.state.items.splice(3,2)
//         this.setState({items:this.state.items})
//     }

//     render() {
//         const list = this.state.items.map((item,index)=><li key={index}>{item}</li>)
//         return (
//             <div>
//                 <button onClick={this.addItem = this.addItem.bind(this)}>ADD</button> 
//                 <button onClick={this.deleteItem = this.deleteItem.bind(this,3)}>DELETE</button> 
//                 <button onClick={this.deletConcrete = this.deletConcrete.bind(this)}>DELETE CONCRETE</button>  
//                 <ul>
//                     {list}
//                 </ul>   
                    
//             </div>
//         );
//     }
// }

// export default ProCycles;