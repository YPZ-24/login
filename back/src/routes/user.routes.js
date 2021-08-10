const {Router} = require('express') 
const { saveUser, getUsers } = require('../controllers/user')
const router = Router()
const yup = require('yup')
const { createUserSchema } = require('../utils/schemas/user')
const validate = require('../middleware/validate')
const { createUserValidation } = require('../validations/userV')

router.get('/', (req, res) => {

    const users = getUsers()

    res.status(200).json({
        data: {
            users
        },
        message: 'Usuarios encontrados',
        statusCode: 200
    })
})

router.post('/', validate(createUserValidation), (req, res) => {
    const {email, password} = req.body

    saveUser(email, password)

    res.status(201).json({
        message: 'Usuario creado',
        statusCode: 201
    })
})

module.exports = router