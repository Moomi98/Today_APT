import axios from "axios";
import { useState, useEffect } from "react";
import { createProxyMiddleware } from "http-proxy-middleware";

const API = axios.create({
    baseURL : "http://localhost:8080",
    headers:{
        "Content-Type": "application/json",
    },
    withCredentials: true,
})
export function GetDataFromServer() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                setError(null);
                setLoading(true);
                const response = await API.get('/api/get');
    
                console.log(response.data);
            }
            catch(e){
                setError(false);
            }
        }
        fetchData();
    }, [])
}