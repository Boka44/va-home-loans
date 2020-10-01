const teamService = require('../schemas/team');

const teamController = () => { };

teamController.getTeamData = (req , res, next) => {
    teamService.getData()
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

module.exports = teamController;