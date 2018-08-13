import React,{Component} from 'react'
import Button from '@material-ui/core/Button';

class CounterExample extends Component {
    //Ejemplo de Contador
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.state)
        return (
            <div>
            <Button onClick={()=>{ this.props.actions.increment(1);}} variant="contained" >
                Sumale
            </Button>
            <Button onClick={()=>{ this.props.actions.decrement(1);}} variant="contained" >
                Restale
            </Button>
            <h1>{this.props.state.count}</h1>
            </div>  
        )

    }
}


export default CounterExample;