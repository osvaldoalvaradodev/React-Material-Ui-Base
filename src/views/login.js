import React,{Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {postData} from './../utils/helpers';
import GLOBALS from './../utils/globals';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from  '@material-ui/icons/VpnKey';
import Input from '@material-ui/core/Input';
class Login extends Component {
    constructor(props) {
        super(props),
        this.state = {
            user : '',
            password : ''
        }
    }

    //onchange generico!, actualiza el STATE de igual nombre al input
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    sendLogin = () => {
        const user = this.state.user;
        const password = this.state.password;

        const data = {user,password}
        console.log(data);
        postData('https://jsonplaceholder.typicode.com/users',data).then(res=>{
            console.log("Inicio de sesion correcto!");
            console.log(res);
        });
        this.props.handleLogin(true);
    }


    
   render () {
  
    //define el background del login
    const backgroundImageStyle = {
        backgroundImage: 'url(img/background.jpg)',
       
      };
      
    

        
      return (
         <div style={backgroundImageStyle}>
         <Container>
             
        <Row style={{justifyContent: 'center'}}>
            <Col  xs={12} md={6} lg={6}>
         <div className='login-container'>
        <Card >
        <CardContent >
            <Typography variant="headline" component="h2"  color="textSecondary">
            Aplicacion de Pruebas
            </Typography>
            <br />
            <div >
            <FormControl >
                 <InputLabel htmlFor="input-with-icon-adornment">Usuario:</InputLabel>
               
                <Input
                name='user'
                value={this.state.user}
                onChange={this.onChange}
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }
                />
            </FormControl>
            </div>
            <div>
            <FormControl>
                <InputLabel htmlFor="input-with-icon-adornment">Clave:</InputLabel>
                <Input 
                name="password"
                type="password"
                id="input-with-icon-adornment"
                onChange={this.onChange}
                startAdornment={
                    <InputAdornment position="start">
                    <VpnKey />
                    </InputAdornment>
                }
                />
            </FormControl>
            </div>
           
           
        </CardContent>
        <CardActions style={{justifyContent: 'center'}}>
         
            <Button onClick={() => (this.sendLogin())} variant="contained" color="primary">
                Iniciar Sesion
                </Button>
        </CardActions>
        </Card>
        </div>
        </Col>
        </Row>
        </Container>
        </div>
      )
   }
}

export default Login