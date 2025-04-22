//unsupported/404 endpoints

const notFound = (req, res, next) => {
    const error = new Error(`Not Found -${req.originalURL}`)
    res.status(404)
    next(error);
}

//error middleware
const errorHandler = (error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.code || 500).json({message: error.message || 'an unknown error occurred'});
}

module.exports = {notFound, errorHandler};
