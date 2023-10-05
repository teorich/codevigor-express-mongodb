require('dotenv').config();
import config from 'config';
import express from 'express';
import deserializeUser from './middleware/deserializeUser';
import router from './routes';
import connectToDb from './utils/connectToDb';
import log from './utils/logger';


const app = express()


app.use(express.json())

app.use(deserializeUser)

app.use(router);

const port = config.get('port')

app.listen(() => {
    log.info(`App started at http://localhost:${port}`)

    connectToDb();
})