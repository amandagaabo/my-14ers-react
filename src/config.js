require('dotenv').config();

exports.PORT = process.env.PORT || 3000;
exports.API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';
