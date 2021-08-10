const {Router} = require('express') 
const { saveUser, getUsers } = require('../controllers/user')
const router = Router()

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

router.post('/', (req, res) => {
    const {email, password} = req.body

    saveUser(email, password)

    res.status(201).json({
        message: 'Usuario creado',
        statusCode: 201
    })
})

module.exports = router