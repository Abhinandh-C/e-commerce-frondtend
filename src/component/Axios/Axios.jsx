import axios from "axios";

const token = localStorage.getItem('token')

const Axios = axios.create({

    baseURL : "http://localhost:3000",
    headers :{"Content-Type":"application/json",Authorization : `Bearer ${token}`},
    withCredentials:true

})

export default Axios