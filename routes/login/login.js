import response from '../../functions/response.js';
import i18next from '../../functions/i18next.js';

const t = i18next(null, 'user');

const firstRoute = async function (req) {
    try {
        return response(200, {result: 'ok ok'}, false);
    } catch (error) {
        return response(400, false, t('errorMessage'), error);
    }
};
export default [{
    method: 'get',
    path: '/try',
    callback: firstRoute
}];
