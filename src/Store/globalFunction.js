export const returnError = (error) => {

    return {
        status: false,
        message: error?.data?.message,
        data: undefined,
    };
};