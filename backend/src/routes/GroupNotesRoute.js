
const express = require('express');

const { CreateNotes, getNotesByGroup } = require('../controllers');
const router = express.Router();



// Notes routes
router.post('/postnotes/:groupId', CreateNotes);
router.get('/getnotes/:groupId', getNotesByGroup);

module.exports = router;