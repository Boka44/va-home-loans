const axios = require('axios');

const graphql_url = require("../../config/env/development").api_url_graphql;
const token = require('../../config/env/development').api_token;

const blogSchema = () => { };

const config = {
    headers: { Authorization: `Bearer ${token}` }
};


blogSchema.getBlogPageData = () => {
    return new Promise((resolve, reject) => {
        const body =  {
            query: `
            query {
                blog_page {
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

blogSchema.getAllBlogPosts = (pagination) => {
    return new Promise((resolve, reject) => {
        const limit = 6;
        const offset = pagination * limit - limit;
        const body =  {
            query: `
            query {
                blog_posts (limit: ${limit}, offset: ${offset}){
                    data {
                        id
                        title
                        content
                        image {
                            full_url
                        }
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

blogSchema.getBlogPost = (id) => {
    return new Promise((resolve, reject) => {
    
        const body =  {
            query: `
            query {
                blog_posts (id: ${id}){
                    data {
                        id
                        title
                        content
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

blogSchema.getBlogPostsWithFilter = (pagination, filter) => {
    return new Promise((resolve, reject) => {
        const limit = 6;
        const offset = pagination * limit - limit;
        const filterObj = `{
            or: [
                {title_contains: ${filter}}
                {content_contains: ${filter}}
            ]
        }`
        const body =  {
            query: `
            query {
                blog_posts (limit: ${limit}, offset: ${offset}, filter: ${filterObj}){
                    data {
                        id
                        title
                        content
                        image {
                            full_url
                        }
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


module.exports = blogSchema;