const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'ngrok-skip-browser-warning': true
  };
  
  const STATUS_CODES = {
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    INTERNAL_SERVER_ERROR: 500,
    INTERNAL_SERVER_ERROR_2: 0,
    NOT_FOUND: 404
  };
  
  const ERROR_MESSAGES = { GENERIC: 'Oops! Something went wrong' };
  
  const TIMEOUT = 30000;
  
  module.exports = { ERROR_MESSAGES, HEADERS, STATUS_CODES, TIMEOUT };
  