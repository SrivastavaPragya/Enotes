const { createGroup, getGroups } = require('./GroupControllers');
const { CreateNotes, getNotesByGroup } = require('./GroupNotesController');

module.exports = {
    createGroup,
    getGroups,
    CreateNotes,
    getNotesByGroup
};