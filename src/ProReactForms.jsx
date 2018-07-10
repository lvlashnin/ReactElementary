import React, { Component } from 'react';

export default class ProReactForms extends Component {
    constructor(){
        super()
        this.state={value:''}
    }
    render(){
        return(
                <div>
                <p>Выбранныйц город:{this.state.value}</p>
                 <select value={this.state.value} onChange={this.handleSelectChange.bind(this)}>
                     <option>Харьков</option>
                     <option>Киев</option>
                     <option>Львов</option>
                     <option>Полтава</option>
                 </select>  
                 </div>)
    }
    handleSelectChange(e){
        this.setState({value:e.target.value})
    }
}




    //     constructor(){
//         super()
//         this.state={value: false}
//     }
//     render(){
//         return(
//                 <div>
//                 <p>{this.state.value?'Виден':null}</p>
//                     <input
//                     type="checkbox"
//                     checked={this.state.value}
//                     onChange={this.changeValue.bind(this)}
//                     />
//                 </div>
//         )
//     }
//     changeValue(e){
//         this.setState({value:!this.state.value})
//     }
// }















    //     constructor(){
//         super()
//         this.state={text:''}
        
//     }
//     render(){
//         return(
//             <div>  
//                 <p>Наш текст:{this.state.text}</p> 
//                 <textarea value={this.state.text} onChange={this.changeText.bind(this)}/>
//             </div>
//         )
//     }
//     changeText(e){
//         this.setState({text:e.target.value})
//     }
// }



//дефолтное значение чекбокса
//     	constructor() {
// 		super();
// 		this.state = {checked: true};
// 	}

// 	render() {
// 		return <div>
// 			<input
// 				type="checkbox"
// 				defaultChecked={this.state.checked}
// 			/>
// 		</div>;
// 	}
// }





//дефолтное значение инпута
//     constructor() {
// 		super();
// 		this.state = {value: 'привет'};
// 	}

// 	render() {
// 		return <div>
// 			<input defaultValue={this.state.value} />
// 		</div>;
// 	}
// }
















// радиокнопки
    // 	constructor() {
// 		super();
// 		this.state = {option: 'option1'};
// 	}

// 	//Изменяет this.state.option при изменении радио:
// 	handleRadioChange(event) {
// 		this.setState({option: event.target.value});
// 	}

// 	render() {
// 		return <div>

// 			<p>Ваш выбор: {this.state.option}</p>

// 			<input
// 				name="lang"
// 				type="radio"
// 				value="option1"
// 				checked={this.state.option == 'option1'}
// 				onChange={this.handleRadioChange.bind(this)}
// 			/>

// 			<input
// 				name="lang"
// 				type="radio"
// 				value="option2"
// 				checked={this.state.option == 'option2'}
// 				onChange={this.handleRadioChange.bind(this)}
// 			/>
//             <input
// 				name="lang"
// 				type="radio"
// 				value="option3"
// 				checked={this.state.option == 'option3'}
// 				onChange={this.handleRadioChange.bind(this)}
// 			/>

// 		</div>;
// 	}
// }












//селектор с выводом значения 
    // 	constructor() {
// 		super();
// 		this.state = {
// 			value: 'html',
// 			langs: [
// 				'Язык HTML',
// 				'Язык CSS',
// 				'Язык JavaScript',
// 				'Язык PHP',
// 			]
// 		};
// 	}

// 	//Изменяем this.state.value при изменении селекта:
// 	handleSelectChange(event) {
// 		this.setState({value: event.target.value});
// 	}

// 	render() {
		
// 		//Формируем в цикле набор из тегов <option>:
// 		const options = this.state.langs.map((item, index) => {
// 			return <option key={index} value={index}>{item}</option>;
// 		});

// 		return <div>
//             {/* доступ к  внутреннему массиву */}
// 			<p>Ваш выбор: {this.state.langs[this.state.value]}</p>
// 			<select
// 				value={this.state.value}
// 				onChange={this.handleSelectChange.bind(this)}
// 			>

// 				{options}

// 			</select>
// 		</div>;
// 	}
// }


























    //     constructor(){
//         super()
//         this.state = {value: 'javascript'}
//     }
//     render(){
//         return(<div>
//             <p>Ваш выбор: {this.state.value}</p>
//             <select value={this.state.value} onChange={this.handleSelectChange.bind(this)}>
//             <option>html</option>
//             <option>css</option>
//             <option>javascript</option>
//             <option>php</option>
//         </select>  
//         </div>
//         )
//     }
//     handleSelectChange(event) {
//         this.setState({value: event.target.value});
//     }
// }




















//чекбокс
//     constructor() {
// 		super();
// 		this.state = {checked: false};
// 	}

// 	//Меняем this.state.checked на противоположный:
// 	handleCheckboxChange(event) {
// 		this.setState({checked: !this.state.checked});
// 	}

// 	render() {
// 		return <div>
//         <p>Состояние: {this.state.checked ? 'отмечен' : 'не отмечен'}</p>
// 			<input
// 				type="checkbox"
// 				checked={this.state.checked}
// 				onChange={this.handleCheckboxChange.bind(this)}
// 			/>
// 		</div>;
// 	}
// }

