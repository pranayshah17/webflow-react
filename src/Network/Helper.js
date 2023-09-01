const store = require("../Store/Store");

const injectToken = (config) => {
    const newConfig = { ...config };
    const state = store.getState();
    try {
        if (state.auth.token && newConfig.headers) {
            newConfig.headers.Authorization = `Bearer ${state.auth.token}`;
        }

        return newConfig;
    } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error(String(error));
    }
};

module.exports = { NetworkUtils: { injectToken } };
