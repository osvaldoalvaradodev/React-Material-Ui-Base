import React,{Component} from 'react'

import Button from '@material-ui/core/Button';

class CloseSesionButton extends Component {
    //boton para cerrar la sesion desde cualquier lado :D
    constructor(props) {
        super(props);
    }
    render() {
    
        return (
            <div>
            <Button onClick={()=>{ this.props.actions.login(false);}} variant="contained" >
                Cerrar Sesion
            </Button>
            </div>
        )

    }
}


export default CloseSesionButton;