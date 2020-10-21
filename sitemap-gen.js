const builder = require('xmlbuilder');
const axios = require('axios');
const fs = require('fs');

const graphql_url = require("./config/env/development").api_url_graphql;
// const token = require('./config/env/development').api_token;
const token = 'bXRfkNeVZ84vhiXJDsuNXHZp';

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const buildSitemap = () => {}

buildSitemap.update = () => {
    let sitemapObj = {
        'urlset': {
            '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
            'url': []
        }
    }

    let urls = [
        'https://www.valoans.app/',
        'https://www.valoans.app/home',
        'https://www.valoans.app/team',
        'https://www.valoans.app/qualify',
        'https://www.valoans.app/qualify/apply',
        'https://www.valoans.app/qualify/book-appointment',
        'https://www.valoans.app/qualify/certificate-of-eligibility',
        'https://www.valoans.app/contact',
        'https://www.valoans.app/blog',
        'https://www.valoans.app/condos',
        'https://www.valoans.app/mortgage-calculator'
    ]
    return getBlogPostsTotal()
        .then((result) => {
            // let meta = result.data.blog_posts.meta;
            // let total = meta.total_count;
            // for(let i = 0; i < total; i ++) {
            //     urls.push(`https://www.valoans.app/blog-post/${i+1}`)
            // }
            let data = result.data.blog_posts.data;
            data.forEach((i) => {
                urls.push(`https://www.valoans.app/blog-post/${i.id}`)
            })
            let today = Date.now();
            today = new Date(today);
            let year = today.getFullYear();
            let month = today.getMonth();
            let day = today.getDate();
            let formattedDate = `${year}-${month+1}-${day}`;
            urls.forEach((i) => {
                sitemapObj.urlset.url.push({
                    'loc': i,
                    'lastmod': `${formattedDate}`
                })
            });
            let sitemap = builder.create(sitemapObj, { encoding: 'utf-8' })
            // console.log(sitemap.end({ pretty: true }))
            fs.writeFile("./va-loans/src/sitemap.xml", sitemap.end({ pretty: true }), (err) => {
                if(err) console.log(err);
                console.log('Updated Sitemap');
            })
        })
        .catch((err) => {
            console.log(err.message);
        })

        

}

const getBlogPostsTotal = () => {
    return new Promise((resolve, reject) => {
        const body =  {
            query: `
            query {
                blog_posts {
                    data {
                        id
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
}

// buildSitemap.update();
module.exports = buildSitemap;