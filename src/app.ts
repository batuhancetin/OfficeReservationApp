require("dotenv").config();
import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes/routes';
import deserializeUser from './middleware/deserializeUser';
import { swaggerDocs } from './utils/swagger';
import cron from 'node-cron';
import { deleteReservations } from './services/reservation.service';


const port = config.get<number>('port');

const app = express();

app.use(express.json());

app.use(deserializeUser);

app.use(routes);

cron.schedule("0 0 0 1 * *", deleteReservations);


app.listen(port, async () => {
    logger.info(`App is runnning at http://localhost:${port}.`);
    
    await connect();

    swaggerDocs(app,port);
})