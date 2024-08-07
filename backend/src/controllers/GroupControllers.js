const { Group } = require("../models"); 


 const createGroup = async (req, res) => {
    // Extract information from the request body
    const { name, color, initials } = req.body;

    // Check for required fields
    if (!name || !color || !initials) {
        return res.status(400).json({ message: "Please provide all required fields: name, color, and initials." });
    }

    try {
        
        const newGroup = new Group({
            name,
            color,
            initials
        });

       
        const savedGroup = await newGroup.save();

       
        res.status(201).json(savedGroup);
    } catch (error) {
        
        res.status(500).json({ message: error.message });
    }
};


 const getGroups = async (req, res) => {
    try {
       
        const groups = await Group.find();

        if (!groups || groups.length === 0) {
            return res.status(404).json({ message: "No groups found." });
        }

        
        res.json(groups);
    } catch (error) {
        
        res.status(500).json({ message: error.message });
    }
};


const getGroupById = async (req, res) => {
    try {
        const groupId = req.params.id; // Get the group ID from the URL parameters
        const group = await Group.findById(groupId); // Find the group by ID using Mongoose

        if (!group) {
            return res.status(404).json({ message: "Group not found." });
        }

        res.json(group);
    } catch (error) {
        console.error('Failed to retrieve group:', error);
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    createGroup,
    getGroups,
    getGroupById
};