import axios from "axios";

// const API_URL = '';

const API_GMAIL = async( urlObject,payload ,type) => {
    return await axios ({
        method: urlObject.method,
        url: `${urlObject.endpoint}/${type}`,
        data: payload
    })
}

export default API_GMAIL;
