function errorMiddleware(error, req, res, next){

    if(typeof error.toJson == 'function'){
        //Yo cree el error
        res.status(400).json(error.toJson())
    }else{
        //Fue inesperado
        res.status(500).json({
            message: 'Algo fue mal',
            statusCode: 500
        })
    }
    
    console.log(error)
}

module.exports = errorMiddleware