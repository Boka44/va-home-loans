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

module.exports = contactController;