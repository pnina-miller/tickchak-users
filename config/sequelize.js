import {Sequelize} from 'sequelize';
import {
    DB_HOST,
    DB_NAME,
    DB_PASS,
    DB_USER,
    DB_LIVE_HOST,
    DB_LIVE_NAME,
    DB_LIVE_PASS,
    DB_LIVE_USER,
    DB_USER_HOST,
    DB_USER_NAME,
    DB_USER_PASS,
    DB_USER_USER
} from './config.js';
import {tickchakModelsConfig, liveModelsConfig, userModelsConfig} from '@tickchak/node-share-models';
import {logInfo} from '../functions/logInfo.js';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    query: {raw: true},
    host: DB_HOST,
    dialect: 'mysql',
    logging: false,
    camelCase: true,
    pool: {
        max: 50,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
const sequelizeLive = new Sequelize(DB_LIVE_NAME, DB_LIVE_USER, DB_LIVE_PASS, {
    host: DB_LIVE_HOST,
    dialect: 'mysql',
    logging: false,
    camelCase: true,
    pool: {
        max: 50,
        min: 0,
        idle: 200000,
        evict: 150000,
        acquire: 300000
    }
});

const sequelizeUser = new Sequelize(DB_USER_NAME, DB_USER_USER, DB_USER_PASS, {
    host: DB_USER_HOST,
    dialect: 'mysql',
    logging: false,
    camelCase: true,
    pool: {
        max: 50,
        min: 0,
        idle: 200000,
        evict: 150000,
        acquire: 300000
    }
});

f().then();

async function f () {
    try {
        await sequelize.authenticate();
        await sequelizeLive.authenticate();
        await sequelizeUser.authenticate();
        logInfo({data: 'sequelize connection: Connection has been established successfully.'});
    } catch (error) {
        logInfo({data: 'sequelize ERROR', error});
    }
}
liveModelsConfig(sequelizeLive);
tickchakModelsConfig(sequelize);
userModelsConfig(sequelizeUser);
