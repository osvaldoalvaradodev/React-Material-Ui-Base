import React,{Component } from 'react'

import ExampleContainer from './../../containers/exampleContainer';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

class AboutPage extends Component {
   render () {
      

      return (

        <Card >
        <CardContent>
        <h3 className="header-title">Cabecera</h3>
        <Divider />
        <div>
        <p>Contendor de Ejemplo, el siguiente elemento (boton) cambia el estado de la aplicacion "isLoged" a false... utilizando reactcontext UI.</p>
             
        <p>Por lo tanto cierra la sesion</p>
        <ExampleContainer />
        </div>
        </CardContent>
        </Card>
       
      )
   }
}

export default AboutPage