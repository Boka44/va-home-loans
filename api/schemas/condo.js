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

condoSchema.getAllCondos = (pagination) => {
    return new Promise((resolve, reject) => {
        const limit = 6;
        const offset = pagination * limit - limit;
        const body =  {
            query: `
            query {
                condos (limit: ${limit}, offset: ${offset}){
                    data {
                        id
                        address
                        city
                        zip
                        state
                        image {
                            full_url
                        }
                        description
                        beds
                        baths
                        square_feet
                        price
                        external_link
                    }
                    meta {
                        result_count
                        total_count
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

condoSchema.getCondosWithFilter = (pagination, filter, filterBy) => {
    return new Promise((resolve, reject) => {
        const limit = 6;
        const offset = pagination * limit - limit;
        let filterObj = ``;
        if(filterBy === 'keyword') {
            filterObj = `{
                or: [
                    {address_contains: "${filter}"}
                    {city_contains: "${filter}"}
                    {state_contains: "${filter}"}
                    {zip_contains: "${filter}"}
                    {description_contains: "${filter}"}
                ]
            }`
        }
        if(filterBy === 'city') {
            filterObj = `{
                or: [
                    {city_contains: "${filter}"}
                ]
            }`
        }
        if(filterBy === 'zip') {
            filterObj = `{
                or: [
                    {zip_contains: "${filter}"}
                ]
            }`
        }

        const body =  {
            query: `
            query {
                condos (limit: ${limit}, offset: ${offset}, filter: ${filterObj}){
                    data {
                        id
                        address
                        city
                        zip
                        state
                        image {
                            full_url
                        }
                        description
                        beds
                        baths
                        square_feet
                        price
                        external_link
                    }
                    meta {
                        result_count
                        total_count
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