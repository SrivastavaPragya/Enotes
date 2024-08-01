const express = require('express');
const { groupRoutes, notesRoutes } = require('./routes'); 
const InitDatabase=require("./db/connection")
const cors = require('cors');


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
InitDatabase();

app.use(express.json());

// Using imported routes
app.use('/group', groupRoutes);
app.use('/notes', notesRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});