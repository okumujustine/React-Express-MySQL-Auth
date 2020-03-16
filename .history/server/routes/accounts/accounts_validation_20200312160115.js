const Joi = require('@hapi/joi')

const registrationValidation = data => {
    const accountsRegistrationValidation = Joi.object({
        user_name: Joi.string().required(),
        user_contact: Joi.string().required(),
        user_email: Joi.string().required().min(6).email(),
        user_password: Joi.string().required().min(6),
        user_role: Joi.string().required(),
    })
    return accountsRegistrationValidation.validate(data)
}

module.exports = {registrationValidation}