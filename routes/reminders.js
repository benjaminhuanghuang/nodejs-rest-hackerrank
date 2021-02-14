const router = require('express').Router();
const controller = require('../controllers/reminders');




// Create a 
router.post("/", controller.create);

// Retrieve all 
router.get("/", controller.findAll);

// Retrieve a single reminder with id
router.get("/:id", controller.findOne);


module.exports = router;