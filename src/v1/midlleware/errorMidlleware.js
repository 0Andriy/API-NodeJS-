const ApiError = require("../exceptions/apiErrors")

module.exports = function (err, req, res, next) {
    console.log(err)

    // якщо помилка є об'єктом класу ApiError
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }

    return res.sta(500).json({message: "Неочікувана помилка"})
}