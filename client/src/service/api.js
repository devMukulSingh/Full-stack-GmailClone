import axios from "axios";

const api_url = "";

const API_GMAIL = async( urlObject,payload ,type) => {
    return await axios ({
        method: urlObject.method,
        url: `${api_url}/${urlObject.endpoint}/${type}`,
        data: payload,
    })
}

export default API_GMAIL;
