import React,{Component} from 'react'
import {getData} from './../utils/helpers'
import CircularProgress from '@material-ui/core/CircularProgress';
class UserListExample extends Component {
    //Ejemplo de Contador
    constructor(props) {
        super(props);

        this.state = {
            userList : []
        }
    }

    componentDidMount(){
        getData('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res);
            this.setState({userList : res})

        })

    }
    render() {
        
        if(this.state.userList.length > 0){
            return (
              
                this.state.userList.map((l, i) => (
                    <div>
                    
                    <h3>{l.name}</h3>
                    </div>
                )
            )
        )
        }else{
            return(
                <CircularProgress />
            )
        }
    

    }
}


export default UserListExample;