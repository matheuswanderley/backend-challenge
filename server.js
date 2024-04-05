require('dotenv').config();
const express = require('express');
const routes = require('./src/routes/routes');
const app = express();

app.use(express.json());

app.get('/healthcheck', (req, res) => {
    res.status(200).send('Server is OK.');
});
app.use('/', routes);

if (require.main === module) {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on  http://localhost:${process.env.PORT}`);
    });
}
module.exports = app;