'use strict';

function handle404(req, res, next) {
    const errorObj = {
        status: 404,
        message: 'Could not find what you were searching for'
    }

    res.status(404).json(errorObj);
}

module.exports = handle404;