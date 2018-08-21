import React,{Component } from 'react'
import UserLogedScreen from './userLogedScreen'
import Login from './login'
import GLOBALS from './../utils/globals';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class MainView extends Component {
    constructor(props) {
        super(props);

       
    }
   
    componentWillMount(){
        console.log("Props en MAINVIEW: ");

        console.log(this.props);
        console.log(this.props.state.IS_LOGED);

    }

    //manejador de login, debe pasarse al componente hijo
    handleLogin =(status)=>{
        console.log("Seteando el Status en " + status)
        if(status){
            this.props.actions.login(true);
        
          }else{
            this.props.actions.login(false);
          }
    }
   render () {
  
    if(this.props.state.IS_LOGED){
        return(
        <div>
        <ToastContainer />
        <UserLogedScreen handleLogin={this.handleLogin}></UserLogedScreen>
        </div>
        )
    }else{
      return (
        <div>
        <ToastContainer />
        <Login handleLogin={this.handleLogin}></Login>
        </div>
      )
   }
}
}

export default MainView