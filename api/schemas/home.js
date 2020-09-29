const axios = require('axios');

const graphql_url = require("../../config/env/development").api_url_graphql;
const token = process.env.apiToken;

const homeSchema = () => { };

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

homeSchema.getData = () => {
    const body =  JSON.stringify({
        query: `
            home_page {
                data {
                    hero_title
                    slider_images {
                        img {
                            full_url
                        }
                    }
                    video_title
                    newsletter_title
                    newsletter_subtitle
                    testimonials {
                        name
                        city
                        state
                        description
                        image {
                                full_url
                        
                        }
                        
                    }
                    contact_title
                    contact_description
                    
                }
            }`
    });
    axios.post(graphql_url, body, config)
        .then((res) =>{
            return res.body;
        });
};

// 3.13.119.108:8080/tidal/items/home_page?fields=*,slider_images.img.data,testimonials.*
// everything but testimonial image link

// items/home_page?fields=slider_images.*


module.exports = homeSchema;