import {logError} from './logInfo.js';

const response = function (code, body = null, errorMessage = '', catchError = '') {
    let response = '';
    switch (code) {
        case 200:
            response = 'OK';
            break;
        case 400:
            response = 'Bad Request';
            break;
        case 403:
            response = 'Forbidden';
            break;
        case 404:
            response = 'Not Found';
            break;
        case 500:
            response = 'Internal Server Error';
            break;
    }
    const res = {
        statusCode: code,
        body: body || {}
    };

    if(code === 200) {
        if(!body) {
            res.body.response = response;
        }
    } else {
        logError('response.js', 'errorMessage: ' + errorMessage + '. catchError: ' + catchError + '. trace: ' + (catchError?.stack?.trim() || getStackTrace()));
        res.body.errorMessage = errorMessage || response;
    }

    return res;
};

const getStackTrace = () => {
    const error = new Error();
    return error.stack
        .split('\n')
        .slice(2)
        .map((line) => line.replace(/\s+at\s+/, ''))
        .join('\n');
};

export default response;
