import { RequiredValidation, EmailValidation, AlphaSpaceValidation, PhoneNumberValidation } from '../validation';

const BookingFormValidator = {
    username: {
        rules: [
            {
                test: (value) => {
                    return RequiredValidation(value);
                },
                message: 'Please enter your name',
            },
            {
                test: (value) => {
                    return AlphaSpaceValidation(value);
                },
                message: 'Only letters and spaces are allowed',
            },
        ],
        errors: [],
        valid: false,
        value: '',
    },
    email: {
        rules: [
            {
                test: (value) => {
                    return RequiredValidation(value);
                },
                message: 'Please enter your email',
            },
            {
                test: (value) => {
                    return EmailValidation(value);
                },
                message: 'Invalid email',
            },
        ],
        errors: [],
        valid: false,
        value: '',
    },
    phone_no: {
        rules: [
            {
                test: (value) => {
                    return PhoneNumberValidation(value);
                },
                message: 'Please enter valid 10 digit phone no',
            },
        ],
        errors: [],
        valid: false,
        value: '',
    },
};

export default BookingFormValidator;