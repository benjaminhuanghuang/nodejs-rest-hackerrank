const Reminders = require('../models/reminders');
const {Op} = require('sequelize');


module.exports = {
// Create 
async create(req, res) {
  try {
    const reminder = await Reminders.create({
      user: req.body.user,
      description: req.body.description,
      date: req.body.date,
    })
    res.status(201).send(reminder)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
},

// Retrieve all 
async findAll(req, res) {
  try {
    const all = await Reminders.findAll({})
    res.status(200).send(all)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
},

// Find a single Tutorial with an id
async findOne (req, res){
  try {
    const all = await Reminders.findAll({
      where: { id: req.params.id }
    })
    if (all.length === 0)
      res.status(404).send('ID not found')
    else
      res.status(200).send(all[0])
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}
}
