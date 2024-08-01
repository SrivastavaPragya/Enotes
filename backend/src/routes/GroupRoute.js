const express = require('express');
const { createGroup, getGroups } = require('../controllers/');

const router = express.Router();

// Group routes
router.post('/postgroups', createGroup);
router.get('/getgroups', getGroups);

module.exports = router; 