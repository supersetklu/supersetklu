// server.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./Routers/userRoutes');
const sequelize = require('./databaseconnection');

const app = express();
const PORT = 9999;

app.use(bodyParser.json());
app.use('/users', userRoutes);

sequelize.sync()
.then(() => {
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
})
.catch(error => {
    console.log('Error:', error);
});
