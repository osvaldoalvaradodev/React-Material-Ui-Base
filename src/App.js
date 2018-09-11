import React, { Component } from 'react';
//libreria para las rutas
import { BrowserRouter } from 'react-router-dom'

//elementos para CONTEXT UI
import ContextContainer from './contextContainer'
import { createStore } from './createStore'
import { Provider } from './createConsumer'

class App extends Component {
  //estado inicial, define los STATE globales para la aplicacion
  state = { 
    IS_LOGED: false,
    TOKEN: '',
    ROL: [] ,
    count : 0
  } 
  render() {
    return (
      
      <Provider value={ createStore(this) }> 
        <BrowserRouter><ContextContainer></ContextContainer></BrowserRouter>
      </Provider>
 
       
        
     
    
    );
  }
}

export default App;
