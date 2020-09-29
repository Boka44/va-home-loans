const homeService = require('../schemas/home');

const homeController = () => { };

homeController.getHomeData = (req , res, next) => {
    homeService.getData()
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

module.exports = homeController;

// retrieve home page data

// get home page slider images
// 
// items/home_page?fields=slider_images.*

// get all testimonials

// get image ids from testimonials

// add each image url to testimonial