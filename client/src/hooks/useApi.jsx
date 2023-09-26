import { useState } from "react";
import API_GMAIL from "../service/api";

const useApi =(urlObject) => {

    const[ response, setResponse ] = useState();
    const[ error , setError ] = useState();
    const[ loading, setLoading ] = useState(false);

    const call = async( payload, type ='' ) => {
        setLoading(true);
        console.log(urlObject);
     try {
           const res = await API_GMAIL(urlObject,payload,type);
           setResponse(res.data);
   
     } catch (error) {
            setError(error.message);
     }
     finally{
        setLoading(false);
     }
    }

    return { call, response, error ,loading };

};

export default useApi;