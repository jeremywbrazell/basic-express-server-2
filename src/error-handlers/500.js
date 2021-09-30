'use strict';

module.exports = function (err, req, res, next) {
    const error = err.message ? err.message : err;

    const errorObj = {
        status: 500,
        message: error,
        route: req.path,
        query: req.query,
        body: req.body,
        error: `Server Error ${error.message}`
    }

    res.status(500).json(errorObj);
}