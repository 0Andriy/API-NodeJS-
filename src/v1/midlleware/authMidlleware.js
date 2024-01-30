const ApiError = require("../exceptions/apiErrors")
const tokenService = require("../services/tokenService")



module.exports = function (req, res, next) {
    try {
        // отримаємо із headers запиту дані по ключу Authorization
        const authorizationHeader = req.headers.Authorization
        // робимо перевірку чи він взагалі є
        if (!authorizationHeader) {
            return next(ApiError.UnavthorizeError())
        }

        // дістаємо сам accessToken із headers запиту дані по ключу Authorization
        const accessToken = authorizationHeader.split(" ")[1]

        // перевіряємо чи є сам токен
        if (!accessToken) {
            return next(ApiError.UnavthorizeError())
        }

        // проводимо валідацію отриманого accessToken
        const userData = tokenService.validateAccessToken(accessToken)

        // перевіряжмо чи успішно пройшла валідація accessToken
        if (!userData) {
            return next(ApiError.UnavthorizeError())
        }

        // у req по ключу user записуємо дані про юзера
        req.user = userData

        // переходиом до наступного midlleware
        next()
        

    } catch (error) {
        return next(ApiError.UnavthorizeError())
    }
}