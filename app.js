import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import {FRONT_DOMAIN, TICK_DOMAIN_MY} from './config/config.js';
import './config/sequelize.js';
import './config/redis.js';
import './config/configLocale.js';
import routes from './routes/router.js';
import {logInfo} from './functions/logInfo.js';
import compression from 'compression';
import {createServer} from 'http';
import responseTime from './middleware/responseTime.js';

const app = express();
const port = process.env.NODE_PORT || 5000;
const server = createServer(app);

app.use(
    cookieParser(),
    cors({origin: [FRONT_DOMAIN, `https://${TICK_DOMAIN_MY}`], credentials: true}),
    express.json({limit: '50mb'}),
    express.urlencoded({extended: true, limit: '50mb'}),
    bodyParser.json({limit: '50mb'}),
    bodyParser.urlencoded({limit: '50mb', extended: true}),
    helmet(),
    helmet.hidePoweredBy(),
    helmet.contentSecurityPolicy()
);
app.disable('x-powered-by');

app.use(
    compression({
        level: 9,
        threshold: 102400
    })
);
app.use('*',
    responseTime
);

app.use('/v1', routes);

logInfo({data: 'TEST VERSION'});
logInfo({data: `NODE ENV: ${process.env.NODE_ENV}`});

server.listen(port, () => {
    logInfo({data: `SERVER PORT. Server is running at port : ${port}`});
});
