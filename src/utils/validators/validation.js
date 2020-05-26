export const RequiredValidation = data => {
    const regeEx = /^\s*$/;
    return !regeEx.test(String(data).toLowerCase());
};

export const EmailValidation = email => {
    const regeEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regeEx.test(String(email).toLowerCase());
};

export const AlphaSpaceValidation = data => {
    const regeEx = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    return regeEx.test(String(data).toLowerCase());
};

export const PhoneNumberValidation = data => {
    const regeEx = /^\d{10}$/;
    return regeEx.test(String(data).toLowerCase());
}
