const yup = require('yup')
//Schemas
const emailUserSchema = yup.string().email().trim();
const passwordUserSchema = yup.string().min(6);

const createUserSchema = yup.object().shape({
    email: emailUserSchema.required(),
    password: passwordUserSchema.required()
})

const updateUserSchema = yup.object().shape({
    email: emailUserSchema,
    password: passwordUserSchema
})

module.exports = {
    createUserSchema
}