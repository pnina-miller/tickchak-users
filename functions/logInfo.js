import {NODE_ENV} from '../config/config.js';

const logError = (type, message) => {
    logInfo({isError: true, type, message});
};

const logInfo = (data) => {
    if(NODE_ENV === 'local' && ['request', 'response', 'dangerousActivity'].includes(data?.type)) {
        return;
    }
    console.log(JSON.stringify(data));
};

const checkLimitSize = (data, limitSize = 16) => {
    const jsonData = JSON.stringify(data);
    return Buffer.byteLength(jsonData, 'utf8') / 1000 > limitSize
        ? `data weight bigger than ${limitSize}kb`
        : jsonData;
};

const ACTION_LOG = {
    100: 'Activated the event',
    101: 'Turn off the event',
    102: 'Add permission to event',
    103: 'Add permission high security level to event',
    104: 'Delete event',
    105: 'Duplicate event',
    106: 'Paycash event',
    107: 'Remove paycash from event',
    108: 'Change billing id after other bull',
    109: 'Approved package bank account'
};

export {logInfo, logError, ACTION_LOG, checkLimitSize};
