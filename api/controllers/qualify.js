const qualifyService = require('../schemas/qualify');

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

module.exports = qualifyController;