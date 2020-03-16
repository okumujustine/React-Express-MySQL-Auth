const Joi = require('@hapi/joi')

const registrationValidation = data => {
    const accountsRegistrationValidation = {
        email: Joi.string().required().min(6).email()
    }
    return Joi.validate(data, accountsRegistrationValidation)
}

module.exports = {registrationValidation}