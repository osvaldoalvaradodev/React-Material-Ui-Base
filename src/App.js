import React, { Component } from 'react';


import { BrowserRouter } from 'react-router-dom'
import { createStore } from './createStore'
import { Provider } from './createConsumer'
import MainView from './views/mainView';
import ContextContainer from './contextContainer'


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
