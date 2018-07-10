import React, { Component } from 'react'
import Article from './Article'
import {articles} from './fixtures'
import States from './States'
import TernarIf from './TernarIf'
import ProCycles from './ProCycles';
// import ReactForms from './ReactForms';
import ProReactForms from './ProReactForms'

class App extends Component {
  render() {
    return (
      <div>
      <Article article = {articles[1]} foo = 'bar'/>
      <States/>    
      <TernarIf/> 
      <ProCycles/>
      {/* <ReactForms/> */}
      <ProReactForms/>
      </div>
    );
  }
}

export default App;