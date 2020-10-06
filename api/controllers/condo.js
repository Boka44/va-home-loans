const condoService = require('../schemas/condo');

const condoController = () => { };

condoController.getCondoPageData = (req , res, next) => {
    condoService.getCondoPageData()
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

module.exports = condoController;