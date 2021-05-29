const express = require('express');
const cors = require('cors');
const axios = require('axios');
const morgan = require('morgan');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 9999;

app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    const getArticles = async () => {
        try {
          const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.API_KEY}`)               
          return res.send(response.data)
        } catch (error) {
          console.error(error)
        }
      }
      getArticles();
    });

app.get('/:title', (req, res) => {
    const title = req.params.title;
    const sort = req.query.sort;
    const getArticles = async () => {
        try {
          const response = await axios.get(`https://newsapi.org/v2/everything?q=${title}&sortBy=${sort}&apiKey=${process.env.API_KEY}`)                       
          return res.send(response.data)
        } catch (error) {
          console.error(error)
        }
      }
      getArticles();
    })    
    
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})