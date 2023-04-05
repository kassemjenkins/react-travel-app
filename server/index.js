const PORT = 8000;
const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//Default
app.get('/', (req, res) => {
    res.status(200).json('Welcome to my traventure app');
})

//Get all posts
app.get('/posts', async (req, res) => {
    const url = `${process.env.ASTRA_URL}?page-size=20`;

    const options = {
        method: "GET",
        headers: {
            'X-Cassandra-Token': process.env.TOKEN
        }
    }

    try {
        const response = await axios(url, options);
        res.status(200).json(response.data);
    } catch(err) {
        console.error(err);
        res.status(500).json({message: err})
    }
})

// Get a post
app.get('/posts/:postId', async (req, res) => {
    const id = req.params.postId;
    const url = `${process.env.ASTRA_URL}/${id}`

    const options = {
        method: "GET",
        headers: {
            'X-Cassandra-Token': process.env.TOKEN
        }
    }

    try {
        const response = await axios(url, options);
        res.status(200).json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err});
    }
})

// Update a post
app.put('/edit/:postId', async (req, res) => {
    const id = req.params.postId;
    const data = req.body.data;
    const url = `${process.env.ASTRA_URL}/${id}`;

    const options = {
        method: "PUT",
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': process.env.TOKEN
        },
        data
    }

    try {
        const response = await axios (url, options);
        res.status(200).json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err});
    }

})

// Add a post
app.post('/create', async (req, res) => {
    const id = req.params.postId;
    const data = req.body.data;
    const url = `${process.env.ASTRA_URL}`;

    const options = {
        method: "POST",
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': process.env.TOKEN
        },
        data
    }

    try {
        const response = await axios (url, options);
        res.status(200).json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err});
    }

})

// Delete a post
app.delete('/delete/:postId', async (req, res) => {
    const id = req.params.postId;
    const url = `${process.env.ASTRA_URL}/${id}`;

    const options = {
        method: "DELETE",
        headers: {      
            'X-Cassandra-Token': process.env.TOKEN
        }
    }

    try {
        const response = await axios (url, options);
        res.status(200).json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err});
    }
})

app.listen(PORT, console.log("Server is listeneing on port: " + PORT));