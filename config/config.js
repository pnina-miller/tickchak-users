import 'dotenv/config';
import dotenv from 'dotenv';

dotenv.config({path: `./.env.${process.env.NODE_ENV}`});

export const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'local';

export const DB_HOST = process.env.TICK_DB_HOST;
export const DB_NAME = process.env.TICK_DB_NAME;
export const DB_USER = process.env.TICK_DB_USER;
export const DB_PASS = process.env.TICK_DB_PASS;

export const DB_LIVE_HOST = process.env.LIVE_DB_HOST;
export const DB_LIVE_NAME = process.env.LIVE_DB_NAME;
export const DB_LIVE_USER = process.env.LIVE_DB_USER;
export const DB_LIVE_PASS = process.env.LIVE_DB_PASS;
export const LIVE_HASHIDS_SALT = process.env.LIVE_HASHIDS_SALT;

export const DB_USER_HOST = process.env.USER_DB_HOST;
export const DB_USER_NAME = process.env.USER_DB_NAME;
export const DB_USER_USER = process.env.USER_DB_USER;
export const DB_USER_PASS = process.env.USER_DB_PASS;

export const AWS_REDIS = process.env.AWS_REDIS;
export const AWS_REDIS_PORT = process.env.AWS_REDIS_PORT;

export const CLOUD_FLARE_CACHE_ZONE = process.env.CLOUD_FLARE_CACHE_ZONE;
export const CLOUD_FLARE_CACHE_AUTH = process.env.CLOUD_FLARE_CACHE_AUTH;

export const DEST_BUCKET = process.env.DEST_BUCKET;
export const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID;
export const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;
export const REGION = process.env.REGION;
export const STATIC_PATH = process.env.STATIC_PATH;
export const STATIC_PATH_STRING = process.env.STATIC_PATH_STRING;

export const JWT_SECRET = process.env.JWT_TOKEN;

export const MAILING_API = process.env.MAILING_API;
export const MAILING_SECRET = process.env.MAILING_TOKEN;

export const TICKLI_ZAPA_KEY = process.env.TICKLI_ZAPA_KEY;
export const TICKLI_SHORTEN_KEY = process.env.TICKLI_SHORTEN_KEY;

export const GOOGLE_AZP = process.env.GOOGLE_AZP;
export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export const FRONT_DOMAIN = process.env.FRONT_DOMAIN;
export const FRONT = process.env.FRONT;

export const TICK_ENCRYPT_DATA = process.env.TICK_ENCRYPT_DATA;
export const TICK_WAZE_KEY = process.env.TICKLI_WAZE_KEY;
export const TICK_PASSWORD_KEY = process.env.TICK_PASSWORD_KEY;
export const TICK_ENCRYPT_KEY = process.env.TICK_ENCRYPT_KEY;
export const ADD_SQS_COMMAND = process.env.ADD_SQS_COMMAND;

export const TICKLI_ORDER_KEY = process.env.TICKLI_ORDER_KEY;
export const TICK_DOMAIN = process.env.TICK_DOMAIN;
export const TICK_DOMAIN_MY = process.env.TICK_DOMAIN_MY;
export const TICK_DOMAIN_TICLI = process.env.TICK_DOMAIN_TICLI;
export const LIVE_DOMAIN = process.env.LIVE_DOMAIN;

export const OPENAI_SECRET_KEY = process.env.OPENAI_SECRET_KEY;
export const GOOGLE_TRANSLATE_API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;

export const REDIS_TTL = 7200;

let IS_TEST, IS_LOCALHOST, HTTP_OR_HTTPS;
switch (NODE_ENV) {
    case 'production':
        IS_TEST = false;
        IS_LOCALHOST = false;
        HTTP_OR_HTTPS = 'https://';
        break;
    case 'test':
        IS_TEST = true;
        IS_LOCALHOST = false;
        HTTP_OR_HTTPS = 'https://';
        break;
    default:
        IS_TEST = true;
        IS_LOCALHOST = true;
        HTTP_OR_HTTPS = 'http://';
        break;
}
export {IS_TEST, IS_LOCALHOST, HTTP_OR_HTTPS};

export const TICKCHAK_COLORFUL_LOGO = `${STATIC_PATH}images/tickchak_colorful_logo.jpg`;
export const GOOGLE_WALLET_BASE_URL = 'https://walletobjects.googleapis.com/walletobjects/v1';
export const GOOGLE_WALLET_SCOPE = 'https://www.googleapis.com/auth/wallet_object.issuer';
export const GOOGLE_WALLET_MAPS_LINK = 'https://www.google.com/maps/search';
export const GOOGLE_WALLET_SAVE_LINK = 'https://pay.google.com/gp/v/save';
export const GOOGLE_MAPS_API = 'https://maps.googleapis.com/maps/api';

export const TICKCHAK_DEFAULT_FB_IMAGE = `${STATIC_PATH}all/defaultImage.png`;
export const GIVECHAK_DEFAULT_FB_IMAGE = `${STATIC_PATH}images/app/mail/givechakLogo.png`;
export const TICKCHAK_LOGO = `${STATIC_PATH}all/dln_00TTqZGZLlFUVpGbKBVeENXTtRXNSxmYzB3VZJUd3RGNMV3b5Z2dzRnaKZ2S_090TQK9yUjJzMKJVaupWSJFlTzJUMpN3V.png_e2eccecb-c17b-43ab-ad2b-844621a8534c.png?v=1645126231442`;
export const LOGIN_GOOGLE_API = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=';
export const LOGIN_FACEBOOK_API = 'https://graph.facebook.com/me?fields=email,id&access_token=';
export const PICTURE_FACEBOOK_API = 'https://graph.facebook.com/me/picture?type=large&access_token=';
export const SQS_SCREENSHOT = 'SCREENSHOT';
export const SQS_UPDATE_DOMAINS = 'UPDATE_DOMAINS';
export const SESSION_TIME = 60 * 60 * 2;
export const CODE_EXPIRATION = 60 * 3;
export const SECURITY_CODE_EXPIRATION = 60 * 10;
export const MAILING_JWT_EXPIRATION = 60 * 60 * 6;
export const JERUSALEM_TIME_ZONE = 'Asia/Jerusalem';
export const DEFAULT_TIME_ZONE = 'Asia/Jerusalem';
export const DEFAULT_USER_IMAGE = `${STATIC_PATH}images/userProfile.jpg`;
export const CLASSCHAK_OPEN_AI = 'class, after school activity, panorama, digital art, 4d';
export const GPT_ABOUT_CLASS = 'Tell us about an amazing class called';
export const GPT_ABOUT_CLASS_SUFFIX = 'Hurry up to register';
export const GPT_ABOUT_GUIDE = 'Tell about the impressive resume of';
export const GPT_GUIDE_QUOTE = 'Write an inspirational quote about class called';

export const EMAIL_SENDER_GENERAL = 'tickchak';
export const SMS_SENDER_GENERAL = 'Tickchak';
export const SMS_SENDER_AUTH = 'TickPass';
export const TICKCHAK_OFFICE_PHONE_NUMBER = '972732077577';

export const WHATSAPP_ORDER_TEMPLATE = 'send_ticket_wa';
export const WHATSAPP_GIVECHAK_TEMPLATE = 'send_give_wa';

export const GOOGLE_A_READONLY = 'https://www.googleapis.com/auth/analytics.readonly';
export const GOOFLE_ANALYTICS = 'https://www.googleapis.com/auth/analytics';

export const AUTHORIZED_IP_ADDRESS = [
    '3.122.157.20', // VPN
    '147.236.181.30' // TICKCHAK NEW OFFICE
];

export const GOOGLE_JSON = {
    type: process.env.GOOGLE_VISION_TYPE,
    project_id: process.env.GOOGLE_VISION_PROJECT_ID,
    private_key_id: process.env.GOOGLE_VISION_PRIVATE_ID,
    private_key: process.env.GOOGLE_VISION_PRIVATE_KEY2?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_VISION_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_VISION_CLIENT_ID,
    auth_uri: process.env.GOOGLE_VISION_AUTH_URI,
    token_uri: process.env.GOOGLE_VISION_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GOOGLE_VISION_AUTHPROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.GOOGLE_VISION_CLIENT_X509_CERT_URL
};

export const GOOGLE_JSON_PING = {
    type: process.env.GOOGLE_VISION_TYPE,
    project_id: process.env.GOOGLE_VISION_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PING_JSON_PRIVATE_KEY,
    private_key: process.env.GOOGLE_PING_JSON_PRIVATE_KEY_ID?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_PING_JSON_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_PING_JSON_CLIENT_ID,
    auth_uri: process.env.GOOGLE_VISION_AUTH_URI,
    token_uri: process.env.GOOGLE_VISION_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GOOGLE_VISION_AUTHPROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.GOOGLE_PING_JSON_CLIENT_X509_CERT_URL
};

export const GOOGLE_WALLET_ISSURE_ID = process.env.GOOGLE_WALLET_ISSURE_ID;
export const GOOGLE_PROPERTY_ID = process.env.GOOGLE_PROPERTY_ID;

export const AUTOMATED_LEADS = [
    {name: 'LIVE', ref: 110000},
    {name: 'GOOGLE', ref: 30000},
    {name: 'META', ref: 40000},
    {name: 'WHATSAPP', ref: 50000},
    {name: 'HOMEPAGE', ref: 60000},
    {name: 'FRONTPAGE', ref: 70000},
    {name: 'TWITTER', ref: 80000},
    {name: 'INSTAGRAM', ref: 120000}
];
export const OPEN_AI_MODELS = {
    DEFAULT_TEXT_MODEL: 'gpt-4o',
    DEFAULT_IMAGE_MODEL: 'dall-e-3',
    DALL_E2_MODEL: 'dall-e-2',
    DEFAULT_DIMENSIONS: '1024x1024',
    SMALL_DIMENSIONS: '512x512',
    DEFAULT_MAX_TOKEN: 100,
    DEFAULT_TEMPERATURE: 0.1
};
