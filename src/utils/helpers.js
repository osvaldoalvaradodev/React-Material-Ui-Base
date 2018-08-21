import axios from 'axios';
import GLOBAL from '../utils/globals';
import {  toast } from 'react-toastify';



export function funcion1(){
    console.log("Helper de Pruebas");
}


export function getData(Url,Token){
    console.log("Get : "+ Url);
    return axios.get(Url,{
      headers: {
        'Authorization': 'Bearer ' + Token
       },
       
    })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      //console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      if (error.response) {
      }
      return error;
    });
  }

  export function postData(Url,Item,Token){
    console.log("post : " +  Url);
    return axios.post(Url,Item,{
    //return axios.post( Url,Item,{
      headers: {
        'Authorization': 'Bearer ' + Token
       },
       timeout: 3000,
    })
    .then(function (response) {
      console.log(response.status);
      return response;
    })
    .catch(function (error) {
      console.log(error.response);
      
      return error.response;
    });
  }

  export function okAlert(text){
    toast.success(text);
  }

  export function errorAlert(text){
    toast.error(text);
  }