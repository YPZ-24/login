
const ValidationError = require('../utils/errors/ValidationError')

function validate(validation){
    return async (req, res, next) => {
        try{
            await validation(req);
            next();
        }catch(e){
            next( new ValidationError(e) );
        }
    }
}

module.exports = validate


