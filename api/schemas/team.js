const axios = require('axios');

const graphql_url = require("../../config/env/development").api_url_graphql;
const token = require('../../config/env/development').api_token;

const homeSchema = () => { };

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

homeSchema.getData = () => {
    return new Promise((resolve, reject) => {
        const body =  {
            query: `
            query {
                    home_page {
                        data {
                            alert_text
                            hero_title
                            slider_images {
                                img {
                                    full_url
                                }
                            }
                            video_title
                            video_link
                            newsletter_title
                            newsletter_subtitle
                            testimonials {
                                name
                                city
                                state
                                description
                                image {
                                    full_url
                                    thumbnails {
                                        url
                                    }
                                }
                                
                            }
                            contact_title
                            contact_description
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


module.exports = homeSchema;