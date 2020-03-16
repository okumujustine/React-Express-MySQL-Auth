const Joi = require('@hapi/joi')

const registrationValidation = data => {
    const accountsRegistrationValidation = {
        email: Joi.require().string().min(6).email()
    }
}