import axios from "axios";
const { NetworkUtils } = require("../Network/Helper");
const { ERROR_MESSAGES, HEADERS, STATUS_CODES } = require("../Network/Constants");
const { config } = require("../Utils/Configue");

class ApiClient {
  constructor(baseURL) {
    this.ApiInstance = axios.create({
      baseURL,
      headers: HEADERS,
    });
    this.ApiInstance.interceptors.request.use(
      NetworkUtils.injectToken,
      (error) => Promise.reject(error)
    );
    this.ApiInstance.interceptors.response.use(
      (response) => response,
      this.handleError
    );
  }

  get(url, config) {
    return this.ApiInstance.get(url, config);
  }

  post(url, data, config) {
    return this.ApiInstance.post(url, data, config);
  }

  patch(url, data, config) {
    return this.ApiInstance.patch(url, data, config);
  }

  put(url, data, config) {
    return this.ApiInstance.put(url, data, config);
  }

  delete(url, config) {
    return this.ApiInstance.delete(url, config);
  }

  handleError(error) {
    const { response } = error;
    const status = response ? response.status : "";
    switch (status) {
      case STATUS_CODES.INTERNAL_SERVER_ERROR: {
        console.error(ERROR_MESSAGES.GENERIC);
        break;
      }
      case STATUS_CODES.INTERNAL_SERVER_ERROR_2: {
        console.error(ERROR_MESSAGES.GENERIC);
        break;
      }
      case STATUS_CODES.FORBIDDEN: {
        break;
      }
      case STATUS_CODES.UNAUTHORIZED: {
        console.error(response ? response.data.message : "");
        break;
      }
      case STATUS_CODES.NOT_FOUND: {
        console.error(
          response ? response.data.message || response.data.detail : ""
        );
        break;
      }
      default:
        break;
    }
    return Promise.reject(response);
  }
}

console.log("Will this work?", config.BASE_URL);
const { BASE_URL } = config;
const BaseClient = new ApiClient(BASE_URL);

export default BaseClient;
