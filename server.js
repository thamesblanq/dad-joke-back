const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT;


//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get('/joke', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_HOST
        }
      };
    try{
        const response = await axios.request(options);
        res.status(200).json({ "message": response.data.body[0]})
    } catch(err) {
        res.status(500).json({ "message": err.message });
    }
    
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})