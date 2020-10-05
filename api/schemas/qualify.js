const axios = require('axios');

const graphql_url = require("../../config/env/development").api_url_graphql;
const token = require('../../config/env/development').api_token;

const qualifySchema = () => { };

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

qualifySchema.getApplyData = () => {
    return new Promise((resolve, reject) => {
        const body =  {
            query: `
            query {
                apply_page {
                    data {
                        image {
                            full_url
                        }
                        title
                        image_title
                        description
                        link
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

qualifySchema.getCertData = () => {
    return new Promise((resolve, reject) => {
        const body =  {
            query: `
            query {
                certificate_page {
                    data {
                        title
                        subtitle
                        description
                        description_title
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


// 3.13.119.108:8080/tidal/items/home_page?fields=*,slider_images.img.data,testimonials.*
// everything but testimonial image link

// items/home_page?fields=slider_images.*


module.exports = qualifySchema;