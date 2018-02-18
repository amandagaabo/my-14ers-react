require('dotenv').config();

exports.PORT = process.env.PORT || 3000;
exports.API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';
exports.FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || '335446923615924';
