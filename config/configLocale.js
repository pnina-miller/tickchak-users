import i18next from 'i18next';
import Backend from 'i18next-fs-backend';

i18next.use(Backend).init({
    ns: ['login', 'order', 'event', 'package', 'user', 'function', 'mailing', 'tickets', 'designEmail', 'design', 'global'],
    fallbackLng: 'en',
    debug: false,
    interpolation: {escapeValue: true},
    lng: 'en',
    backend: {
        loadPath: 'locale/{{lng}}/{{ns}}.json',
        addPath: 'locale/{{lng}}/{{ns}}.json',
        allowMultiLoading: true
    },
    saveMissing: true
}).then();
