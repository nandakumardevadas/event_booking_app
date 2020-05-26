const isEmptyObj = (obj) => {
    if (Object.getOwnPropertyNames(obj).length > 0) return false;
    return true;
}

export const Helpers = { isEmptyObj }
