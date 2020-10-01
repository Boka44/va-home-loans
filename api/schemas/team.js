const axios = require('axios');

const graphql_url = require("../../config/env/development").api_url_graphql;
const token = require('../../config/env/development').api_token;

const teamSchema = () => { };

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

teamSchema.getData = () => {
    return new Promise((resolve, reject) => {
        const body =  {
            query: `
            query {
                team_page {
                    data {
                        header_image {
                            full_url
                        }
                        title
                        
                        team_members {
                            name
                            credential
                            pets
                            hobbies
                            fun_fact
                            bio
                            email
                            phone
                            image {
                                full_url
                                thumbnails {
                                    url
                                }
                            }
                            
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

// 3.13.119.108:8080/tidal/items/home_page?fields=*,slider_images.img.data,testimonials.*
// everything but testimonial image link

// items/home_page?fields=slider_images.*


module.exports = teamSchema;