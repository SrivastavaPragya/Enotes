const { createGroup, getGroups,getGroupById } = require('./GroupControllers');
const { CreateNotes, getNotesByGroup } = require('./GroupNotesController');

module.exports = {
    createGroup,
    getGroups,
    CreateNotes,
    getNotesByGroup,getGroupById
};