const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');
const config = require('./config');

const mongoos = require('mongoose');

var server = http.createServer(app);
const port = 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use('/api/users', authRoute);
app.use('/api/users/profile/', profileRoute);

if (config.db == "mongo") {
    // connection string to mongo db
    mongoos.connect(config.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => {
            console.log("\nConnected to MongoDB!");
            nodeServer();
        })
        .catch((err) => { console.log(err) });
} else {
    console.log("\nConnected to PostgreSQL!");
    nodeServer();
}

// running nodejs server
function nodeServer() {
    server.listen(port, function () {
        console.log((new Date()) + `: Server is listening on port ${port}`);
    });
}