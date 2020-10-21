const axios = require('axios');

const zapierUrlSubscription = require('../../config/env/development').zapier_url_subscription;

const subscriptionController = () => { };

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

subscriptionController.subscribe = (req, res, next) => {
    let body = req.body;
    if(!validateEmail(body.email)) {
        res.status(422).send({
            success: false
        });
    }
    let zapierPostBody = `{
      "newsletter": {
          "email": "${body.email}"
      }  
    }`;
    if(!req.body) {
        next(err);
    }
    axios.post(zapierUrlSubscription, zapierPostBody)
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

module.exports = subscriptionController;