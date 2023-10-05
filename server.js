const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());

//routes
app.get('/joke', (req, res) => {
    try{
        res.status(200).json({ "message": process.env.REACT_APP_API_KEY });
    } catch(err) {
        res.status(500).json({ "message": err.message });
    }
    
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})