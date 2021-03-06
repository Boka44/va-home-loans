const blogService = require('../schemas/blog');

const blogController = () => { };

blogController.getBlogPageData = (req , res, next) => {
    blogService.getBlogPageData()
        .then((data) => {
            res.status(200).send({
                success: true,
                data: data
            })
        })
        .catch((err) => {
            next(err);
        })
};

blogController.getAllBlogPosts = (req , res, next) => {
    let pagination = req.query.pagination;
    blogService.getAllBlogPosts(pagination)
        .then((data) => {
            res.status(200).send({
                success: true,
                data: data
            })
        })
        .catch((err) => {
            next(err);
        })
};

blogController.getAllBlogPostswithFilter = (req , res, next) => {
    let pagination = req.query.pagination;
    let filter = req.query.filter;
    blogService.getBlogPostsWithFilter(pagination, filter)
        .then((data) => {
            res.status(200).send({
                success: true,
                data: data
            })
        })
        .catch((err) => {
            next(err);
        })
};

blogController.getBlogPost = (req , res, next) => {
    let id = req.query.id;
    blogService.getBlogPost(id)
        .then((data) => {
            res.status(200).send({
                success: true,
                data: data
            })
        })
        .catch((err) => {
            next(err);
        })
};

module.exports = blogController;