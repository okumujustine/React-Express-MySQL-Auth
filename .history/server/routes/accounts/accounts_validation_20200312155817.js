const Joi = require('@hapi/joi')

const registrationValidation = data => {
    const accountsRegistrationValidation = Joi.object({
        user_email: Joi.string().required().min(6).email()
    })
    return accountsRegistrationValidation.validate(data)
}

module.exports = {registrationValidation}