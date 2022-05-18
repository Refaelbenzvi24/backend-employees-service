const Joi = require('joi')

// POST /v1/auth/login
export const login = {
    query: Joi.object({
        email:    Joi.string().email().required(),
        password: Joi.string().required().max(128)
    })
}
