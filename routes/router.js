import express from 'express';
import path from 'path';
import fs from 'fs';
import responseSend from '../functions/responseSend.js';
import {logError} from '../functions/logInfo.js';

const router = express.Router();

fs.readdirSync(path.resolve('./routes', './')).forEach(function (routerName) {
    if(fs.lstatSync('./routes' + '/' + routerName).isDirectory()) {
        fs.readdirSync(path.resolve('./routes', routerName)).forEach(function (file) {
            import('./' + routerName + '/' + file).then((routersDefault) => {
                const routers = routersDefault.default;
                for(let i = 0; i < routers?.length; i++) {
                    const route = routers[i];
                    const middleware = [];
                    router[route.method](route.path, middleware, async (req, res) => {
                        await ajax(req, res, route.method, route.path, route.callback);
                    });
                }
            });
        });
    }
});

export default router;

const ajax = async function (req, res, type, path, callback) {
    try {
        const result = await callback(req, res);
        return responseSend(req, res, result.statusCode, result.body);
    } catch (error) {
        logError(path, `${path}: ${error}`);
        return responseSend(req, res, 400, 'Bad Request');
    }
};
