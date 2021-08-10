const User = require('../models/User')

const users = []

const saveUser = (email, password) => {
    const newUser = new User(email, password)
    users.push(newUser)
}

const getUsers = () => {
    return users
}

module.exports = {
    saveUser,
    getUsers
}