const qualifyService = require('../schemas/qualify');
const axios = require('axios');

const zapierUrlCert = require('../../config/env/development').zapier_url_cert;

const  qualifyController = () => { };

qualifyController.getApplyData = (req , res, next) => {
    qualifyService.getApplyData()
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

qualifyController.getCertData = (req , res, next) => {
    qualifyService.getCertData()
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

qualifyController.certForm = (req, res, next) => {
    let body = req.body;
    let zapierPostBody = `{
      "cert": {
          "name": "${body.name}",
          "email": "${body.email}",
          "phone": "${body.phone}",
          "timeToReach": "${body.timeToReach}"
      }  
    }`;
    if(!req.body) {
        next(err);
    }
    axios.post(zapierUrlCert, zapierPostBody)
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

module.exports = qualifyController;