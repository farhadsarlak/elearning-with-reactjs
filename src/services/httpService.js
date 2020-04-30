import axios from 'axios';
import {toast} from 'react-toastify'

axios.defaults.headers.post["Content-Type"] = "application/json";
const token = localStorage.getItem("token");

if (token) axios.defaults.headers.common["Authorization"] = `Bear ${token}`;

axios.interceptors.response.use(null,error => {
   const expectedError=
       error.response &&
       error.response.status >= 400 &&
       error.response.status< 500;
   if(!expectedError){
      toast.error("مشکلی از سمت سرور پیش آمده است",{
         position:"top-right",
         closeOnClick:true
      })
   }
   return Promise.reject(error)
});

export default {
   get:axios.get,
   post:axios.post,
   put:axios.put,
   delete:axios.delete
}
