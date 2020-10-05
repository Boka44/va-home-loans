const axios = require('axios');

const graphql_url = require("../../config/env/development").api_url_graphql;
const token = require('../../config/env/development').api_token;

const contactSchema = () => { };

const config = {
    headers: { Authorization: `Bearer ${token}` }
};


contactSchema.getContactData = () => {
    return new Promise((resolve, reject) => {
        const body =  {
            query: `
            query {
                contact_page {
                    data {
                        title
                        description
                        schedule_call_to_action
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


module.exports = contactSchema;