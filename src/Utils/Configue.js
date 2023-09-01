
const defaultConfig = {
    BASE_URL: "http://192.168.2.93:5000/api/v1/",
    APP_NAME: "default_app_name",
    APP_VERSION: "default_app_version",
};

export const config = {
    BASE_URL: process.env.REACT_APP_PUBLIC_BASE_URL || defaultConfig.BASE_URL,
    APP_NAME: process.env.REACT_PUBLIC_APP_NAME || defaultConfig.APP_NAME,
    APP_VERSION: process.env.REACT_PUBLIC_VERSION || defaultConfig.APP_VERSION,
};