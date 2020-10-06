const axios = require('axios');

const graphql_url = require("../../config/env/development").api_url_graphql;
const token = require('../../config/env/development').api_token;

const condoSchema = () => { };

const config = {
    headers: { Authorization: `Bearer ${token}` }
};


condoSchema.getCondoPageData = () => {
    return new Promise((resolve, reject) => {
        const body =  {
            query: `
            query {
                condo_page {
                    data {
                        title
                        subtitle
                        image {
                            full_url
                        }
                    }
                }
            }`
        };
        axios.post(graphql_url, body, config)
            .then((res) =>{
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            })
    })
};


module.exports = condoSchema;