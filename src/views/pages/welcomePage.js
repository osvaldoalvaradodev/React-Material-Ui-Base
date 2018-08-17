import React,{Component } from 'react'


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
class WelcomePage extends Component {
   
    constructor(props) {
        super(props);
    }
    render () {

        console.log("Props en WelcomePage")
      console.log(this.props);

      return (
        <Card >
        <CardContent>
        <h3>Cabecera</h3>
        <Divider />
        </CardContent>
        </Card>
      )
   }
}

export default WelcomePage