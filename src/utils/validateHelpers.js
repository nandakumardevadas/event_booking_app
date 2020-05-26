import React from 'react';
class ValidateHelper {
    constructor(validators) {
        this.validators = validators;
        this.errors = {};
        this.formData = {}
    }

    update = (fieldName, value) => {
        if (this.validators.hasOwnProperty(fieldName)) {
            let validatorRules = this.validators[fieldName].rules;
            this.validators[fieldName].errors = [];
            this.validators[fieldName].value = value;
            this.validators[fieldName].valid = true;
            for (let rule of validatorRules) {
                // this.validators[fieldName].rules.forEach((rule) => {
                    if (rule.test instanceof RegExp) {
                        if (!rule.test.test(value)) {
                            this.validators[fieldName].errors.push(rule.message);
                            this.validators[fieldName].valid = false;
                            return false;
                        }
                    } else if (typeof rule.test === 'function') {
                        if (!rule.test(value)) {
                            this.validators[fieldName].errors.push(rule.message);
                            this.validators[fieldName].valid = false;
                            return false;
                        }
                    }
                // });
            }

        }
    }

    resetValidators = (fieldName) => {
        Object.keys(this.validators).forEach((fieldName) => {
            this.validators[fieldName].errors = [];
            this.validators[fieldName].value = '';
            this.validators[fieldName].valid = false;
        });
    }

    getValidationErrors = (fieldName) => {
        Object.keys(this.validators).forEach((fieldName) => {
            this.getFieldValidationError(fieldName);
        });
        return this.errors;
    }

    getFieldValidationError = (fieldName) => {
        const validator = this.validators[fieldName];
        if (validator && !validator.valid) {
            const errors = validator.errors.map((info, index) => {
                // return info;
                return <span className="error" key={index}>* {info}</span>;
            });
            this.errors[fieldName] = errors;
        }
        return this.errors;
    }


    isFormValid = () => {
        let status = true;
        Object.keys(this.validators).some((field) => {
            if (!this.validators[field].valid) {
                status = false;
            }
        });
        return status;
    }

    validateForm = (form) => {
        // form variable should have event.target of form;
        let formDetails = this.getFormData(form);
        for (let fieldName in formDetails) {
            this.update(fieldName, formDetails[fieldName]);
        }
        return {
            errors: this.getValidationErrors(),
            isFormValid: this.isFormValid(),
            formDetails
        }
    }

    getFormData = (form) => {
        const formInfo = new FormData(form);
        for (let entry of formInfo.entries()) {
            this.formData[entry[0]] = entry[1];
        }
        return this.formData;
    }
}

export default ValidateHelper;


