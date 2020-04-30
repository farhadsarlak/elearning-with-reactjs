import {createContext} from 'react';

export const context = createContext({
   fullname:"",
   setFullName:()=>{},
   email:"",
   setEmail:()=>{},
   password:"",
   setPassword:()=>{},
   validator:null,
   handleLogin:()=>{},
   handleRegister:()=>{}
});
