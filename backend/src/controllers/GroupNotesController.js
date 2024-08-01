const { Note } = require("../models");




 const CreateNotes = async (req, res) => {
    const { groupId } = req.params;
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ message: "Content is required." });
    }

    try {
        const newNote = new Note({
            groupId, 
            content
        });

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

 const getNotesByGroup=async(req,res)=>{
    try {
        const notes = await Note.find({ groupId: req.params.groupId });
        res.json(notes);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };


    module.exports = {
        CreateNotes,
        getNotesByGroup
    };