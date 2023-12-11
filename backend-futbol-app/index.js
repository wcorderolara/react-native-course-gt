const express = require('express');
const app = express();
const PORT = 3004;
const cors = require('cors');
const routes = require('./routes');

app.use(express.json());
app.use(cors());
app.use('/futbol-leagues-app/v1', routes);

app.listen(PORT, () => {
    console.log(`Server is running in PORT ${PORT}`)
});
