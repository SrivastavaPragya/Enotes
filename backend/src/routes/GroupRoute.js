const express = require('express');
const { createGroup, getGroups ,getGroupById} = require('../controllers/');

const router = express.Router();

// Group routes
router.post('/postgroups', createGroup);
router.get('/getgroups', getGroups);
router.get('/getgroupbyid/:id', getGroupById);
module.exports = router; 