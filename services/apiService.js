const axios = require('axios');

exports.apiService = async({
    keyValue,
    API_URL,
    BASE,
    TABLE,
    ID,
    METHOD,
    data,
}) => {
    const AUTH_HEADER = {
        Authorization: `Bearer ${!keyValue ? "" : localStorage.getItem(keyValue)}`,
    };

    let url = `${API_URL}/${BASE}`;
    if (TABLE) url = url + `/${TABLE}`;
    if (ID) url = url + `/${ID}`;

    const options = {
        method: METHOD,
        url, 
        headers: {
            ...AUTH_HEADER,            
            "Access-Control-Allow-Origin": "*",
        },
    }

    if (data) { options.data = data; }  
  
    try {
        const response = await axios(options);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}