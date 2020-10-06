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

module.exports = blogController;