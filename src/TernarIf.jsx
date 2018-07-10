import React, { Component } from 'react'

export default class TernarIf extends Component {
    constructor(){
        super()
        this.state = {hrefs: [
            {href: '1.html', text: 'ссылка 1'},
            {href: '2.html', text: 'ссылка 2'},
            {href: '3.html', text: 'ссылка 3'},
        ]}
    }
    
    render(){
        // const list = this.state.hrefs.map((href,text,index)=><li key={index}><a href={href}>{text}</a></li>)
        return(     
                    <ul>
                    {/* {list}                     */}
                    </ul>
    )       
        
    }

}



// constructor(){
//     super()
//     this.state = {names:['Коля', 'Вася', 'Петя']}
// }

// render(){
//     const list = this.state.names.map((name, index)=> <li key={index}> {name} - {index+1} </li>)
//     return(<ul>{list}</ul>
//     )
// }

// }
















//     constructor(){
//         super()
//         this.state = {name: 'Иван', age: 25, show: false}
//     }
//      showMetod(){
//         this.setState({show:!this.state.show})
//     }
//     render(){
//         if (this.state.show){
//             var text = <p>Name: {this.state.name} age:{this.state.age} </p>            
//         }       
       
//         return(            
//             <div>                                              
//                 <button onClick ={this.showMetod.bind(this)}>{this.state.show?'CLOSE':'OPEN'}</button>
//                 {text} 
//             </div>

//         )
//     }

// }



















//     constructor(){
//         super()
//         this.state = {show: true, name: 'Иван'};
//     }    
//     render(){        
//         return(
//                 <div>
//                     {this.state.show ? 'HI ':'GODBYU '}
//                     {this.state.name}
//                 </div>

//         )
//     }

// }
   
   
   
   
   
   
   
   
   
//     constructor(){
//         super()
//         this.state = {show: true, name: 'Иван'};
//     }    
//     render(){        
//         return(
//                 <div>
//                     {this.show? 'HI ':'GODBYU '}
//                     {this.state.name}
//                 </div>

//         )
//     }

// }




// constructor(){
//     super()
//     this.state = {items: [1, 2, 3, 4, 5],text:''}
// }

// showList() {
//     const list = this.state.items.map( (item,index) => <li key={index}>{item}</li>)
//     this.setState({text: <ul>{list}</ul>})
// }

// render() {       
//     return(
//         <div>
//             {this.state.text}
//             <button onClick={this.showList.bind(this)}>Click me</button>   
//                  {console.log(typeof this.state.text)}            
//         </div> 
        
//     )
// }

// } 
 // constructor(){
    //     super()
    //     this.state = {items: [1, 2, 3, 4, 5],}
    // }
    // render(){
    //     const list = this.state.items.map((item,index) => <li key={index}>{item}</li>)
    //     return(
    //         <ul>{list}</ul>
    //     )
    // }

//  constructor(){
//      super()
//      this.state = {show: true}
//  }
// //  hideText(){
// //      this.setState({show:false})
// //  }
//  toggleText(){
//     this.setState({show:!this.state.show})
//  }

//  render(){
//      if (this.state.show){ 
//          var message = <p> Hello my Friend </p>
//         }
//      return(<div>{message}
//             <button onClick = {this.toggleText.bind(this)}>{this.state.show?'CLOSE':'OPEN'}</button>
//             </div>
//      )
//  }



//повторение
//    constructor(){
//        super()
//        this.state={'hello':true}
//    }
//    chengeState() {
//        this.setState({hello:!this.state.hello})
//    }
//    render(){
//        return(<div>       
//        <button onClick={this.chengeState.bind(this)}>{this.state.hello?'HI':'BI'}</button>
//        </div>
//        )
//    }





// constructor(){
    //     super()
    //     this.state = {hello: true,
    //                   show: true      
    //     };
    //     this.chengeProps = this.chengeProps.bind(this)        
    // }   
    // chengeProps(){
    //     this.setState({hello:!this.state.hello})
    // }  
    // hideText(){
    //     this.setState({show:false})
    // }
    // render(){ 
    //     let message = <p>Vasya!</p>
    //     if (this.state.show){
    //     return message
    //    }
    //     return( 
    //     <div>
	// 		{this.state.hello ? 'привет' : 'пока'}
    //         <button onClick={this.chengeProps}>Press</button>
    //         {message}
    //         <button onClick={this.hideText.bind(this)}>скрыть текст</button>
	// 	</div>
            
    //     )
    // }

