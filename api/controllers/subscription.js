const axios = require('axios');

const zapierUrlSubscription = require('../../config/env/development').zapier_url_subscription;

const subscriptionController = () => { };

subscriptionController.subscribe = (req, res, next) => {
    let body = req.body;
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