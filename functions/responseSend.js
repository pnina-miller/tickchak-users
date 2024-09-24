import {checkLimitSize, logInfo} from './logInfo.js';

const responseSend = (req, res, statusCode, message = '') => {
    const diff = process.hrtime(req.startTime);

    const timeTaken = (diff[0] * 1e9 + diff[1]) / 1e9; // Convert to seconds

    logInfo({
        type: 'response',
        id: req.tickchakId,
        path: req.originalUrl,
        method: req.method,
        uid: req.user?.uid,
        statusCode,
        resMessage: checkLimitSize(message),
        time: `${timeTaken} s` // Time in seconds
    });

    return res.status(statusCode).send(message).end();
};

export default responseSend;
