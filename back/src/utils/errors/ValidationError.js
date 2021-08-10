class ValidationError extends Error{
    constructor(e){
        super(e.message)
        this.statusCode =  400
    }
    
    toJson(){
        return {
            statusCode: this.statusCode,
            message: this.message
        }
    }
}


module.exports = ValidationError