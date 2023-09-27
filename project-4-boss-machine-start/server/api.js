const express = require('express');
const apiRouter = express.Router();
const { getAllFromDatabase, getFromDatabaseById, createMinion, addToDatabase } = require('./db');

apiRouter.get('/minions', (req, res, next) => {
  res.send(getAllFromDatabase('minions'))
})

apiRouter.param('minionId', (req, res, next, id) => {
  const minion = getFromDatabaseById('minions', id);
  if (minion) {
    req.minion = minion;
    next();
  } else {
    res.status(404).send();
  }
});
apiRouter.post('/minions', (req, res, next) => {
  const newMinion = createMinion()
  addToDatabase('minions', newMinion)
  res.send(newMinion)
})
apiRouter.get('/minions/:minionId', (req, res, next) => {
  res.send(req.minion)
})

module.exports = apiRouter;
