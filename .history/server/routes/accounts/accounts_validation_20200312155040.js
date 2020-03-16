const Joi = require('@hapi/joi')

const registrationValidation = data => {
    const accountsRegistrationValidation = {
        email: Joi.require().string().min(6).email()
    }
    return Joi.validate(data, accountsRegistrationValidation)
}

module.exports = {registrationValidation}