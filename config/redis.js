import {createClient} from 'redis';
import {AWS_REDIS, AWS_REDIS_PORT} from './config.js';
import {logInfo} from '../functions/logInfo.js';

(async () => {
    global.redisClient = false;
    if(process.env.NODE_ENV === 'local') {
        return;
    }
    try {
        if(process.env.NODE_ENV === 'local') {
            global.redisClient = createClient();
        } else {
            global.redisClient = createClient({url: `redis://${AWS_REDIS}:${AWS_REDIS_PORT}`});
        }
    } catch (error) {
        logInfo({data: 'REDIS ERROR', error});
        global.redisClient = false;
    }
    if(global.redisClient) {
        global.redisClient.connect();
        global.redisClient.on('error', function (error) {
            logInfo({data: 'REDIS ERROR 2', error});
            global.redisClient = false;
        });
    }
})();
