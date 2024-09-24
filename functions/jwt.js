import jwt from 'jsonwebtoken';
import {
    CODE_EXPIRATION,
    JERUSALEM_TIME_ZONE,
    JWT_SECRET,
    MAILING_JWT_EXPIRATION,
    MAILING_SECRET,
    NODE_ENV
} from '../config/config.js';
import {getTs} from '../utils/dates.js';
import {logError} from './logInfo.js';

const jwtSign = (data, timeZone = JERUSALEM_TIME_ZONE, expirationTime = CODE_EXPIRATION) => {
    return sign(JWT_SECRET, data, expirationTime, timeZone);
};

const jwtVerify = (data) => {
    return verify(JWT_SECRET, data);
};

const jwtMailingSign = (data, timeZone = JERUSALEM_TIME_ZONE) => {
    return sign(MAILING_SECRET, data, MAILING_JWT_EXPIRATION, timeZone);
};

const sign = (secret, data, expirationTime, timeZone) => {
    data.iat = getTs(timeZone);
    data.env = NODE_ENV;
    try {
        return jwt.sign(data, secret, {expiresIn: expirationTime});
    } catch (e) {
        logError('error jwt sign:', e);
        return false;
    }
};

const verify = (secret, data) => {
    try {
        const jwtToken = jwt.verify(data, secret);
        if(jwtToken && jwtToken.env === NODE_ENV) {
            return jwtToken;
        }
        return false;
    } catch (e) {
        logError(`error jwt verify: ${JSON.stringify(e)}`, data);
        return false;
    }
};

export {jwtSign, jwtMailingSign, jwtVerify};
