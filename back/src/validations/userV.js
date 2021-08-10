const { createUserSchema } = require("../utils/schemas/user");

function createUserValidation(req){
    createUserSchema.validateSync(req.body)
}

module.exports = {
    createUserValidation
}