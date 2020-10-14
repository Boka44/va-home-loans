const contactService = require('../schemas/contact');

const contactController = () => { };

contactController.getContactData = (req , res, next) => {
    contactService.getContactData()
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

contactController.contactForm = (req, res, next) => {
    let body = req.body;
    console.log(body);
    if(!req.body) {
        console.log(req);
    }
    res.status(200).send({
        success: true
    });
}

module.exports = contactController;