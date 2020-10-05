const router = require('express').Router();

const homeController = require('../controllers/home');
const teamController = require('../controllers/team');
const qualifyController = require('../controllers/qualify');

router.get('/home', homeController.getHomeData);

router.get('/team', teamController.getTeamData);

router.get('/qualify/apply', qualifyController.getApplyData);

// const userController = require('../controllers/user');
// const equipmentController = require('../controllers/equipment');
// const locationController = require('../controllers/location');
// const logController = require('../controllers/log');

// router.post('/user', userController.createUser);
// router.get('/users', userController.getAllUsers);
// router.get('/user/userId/:id', userController.findUserById)
// router.post('/user/edit', userController.edit);
// router.delete('/user/userId/:id', userController.delete);

// router.post('/equipment', equipmentController.createEquipment);
// router.get('/equipments', equipmentController.getAllEquipments);
// router.get('/equipment/equipmentId/:id', equipmentController.findEquipmentById)
// router.post('/equipment/edit', equipmentController.edit);
// router.delete('/equipment/equipmentId/:id', equipmentController.delete);

// router.post('/location', locationController.createLocation);
// router.get('/locations', locationController.getAllLocations);
// router.get('/location/locationId/:id', locationController.findLocationById)
// router.post('/location/edit', locationController.edit);
// router.delete('/location/locationId/:id', locationController.delete);

// router.get('/logs/:page', logController.getLogs);
// router.post('/log', logController.createLog);

module.exports = router;