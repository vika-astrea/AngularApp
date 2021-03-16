const express = require('express');
const router = express.Router();
const skills = require('../services/skills');

/* GET skills. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await skills.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting your skills `, err.message);
    next(err);
  }
});

router.get('/accomplished', async function(req, res, next) {
  try {
    res.json(await skills.getAccomplished(req.query.page));
  } catch (err) {
    console.error(`Error while getting your skills `, err.message);
    next(err);
  }
});

router.get('/need', async function(req, res, next) {
  try {
    res.json(await skills.getNeed(req.query.page));
  } catch (err) {
    console.error(`Error while getting your skills `, err.message);
    next(err);
  }
});

/* POST  */
router.post('/post', async function(req, res, next) {
  try {
    res.json(await skills.create(req.body));
  } catch (err) {
    console.error(`Error while creating skill`, err.message);
    next(err);
  }
});


module.exports = router;