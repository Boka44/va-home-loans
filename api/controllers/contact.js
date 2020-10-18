const contactService = require('../schemas/contact');
const axios = require('axios');

const zapierUrlContact = require('../../config/env/development').zapier_url_contact;

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
    let zapierPostBody = `{
      "contact": {
          "name": "${body.name}",
          "email": "${body.email}",
          "phone": "${body.phone}",
          "message": "${body.message}"
      }  
    }`;
    if(!req.body) {
        next(err);
    }
    axios.post(zapierUrlContact, zapierPostBody)
        .then((response) => {
            if(response.status == 200) {
                res.status(200).send({
                    success: true
                });
            };
        })
        .catch((err) => {
            next(err);
        })
}

module.exports = contactController;