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

condoController.getAllCondos = (req , res, next) => {
    let pagination = req.query.pagination;
    condoService.getAllCondos(pagination)
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

condoController.getAllCondoswithFilter = (req , res, next) => {
    let pagination = req.query.pagination;
    let filter = req.query.filter;
    let filterBy = req.query.filterBy;
    condoService.getCondosWithFilter(pagination, filter, filterBy)
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