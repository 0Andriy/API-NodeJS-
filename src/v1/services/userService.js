const tokenService = require("./tokenService")
const ApiError = require("../exceptions/apiErrors")



class UserService {
    // авторизація користувача
    async login () {
        // провіряжмо авторизацію користувача
        // const user  = await 

        if (!user) {
            throw ApiError.BadRequest("Користувач не знайдений")
        }

        // генеруємо токени з навантаженям (!!! -> корисна інфа, яку будуть бачити всі)
        const tokens = tokenService.generateTokens({...user})

        // запускаємо збереження токена в базі
        await tokenService.saveToken(userId, tokens.refreshToken)

        return { ...tokens, user: user}
    }


    // вихід користувача
    async loggout (refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return
    }


    // перезапис токенів
    async refresh (refreshToken) {
        // робимо перевірку наявності токена
        if (!refreshToken) {
            throw ApiError.UnavthorizeError()
        }

        // запускаємо валідаю refreshToken
        const userData = tokenService.validateRefreshToken(refreshToken)

        // шукаємо токен в базі
        const tokenFromDB = await tokenService.findToken(refreshToken)

        // перервіряємо чи всі валідації пройшли успішно
        if (!userData || !tokenFromDB) {
            throw ApiError.UnavthorizeError()
        }

        // генеруємо токени з навантаженям (!!! -> корисна інфа, яку будуть бачити всі)
        const tokens = tokenService.generateTokens({...user})

        // запускаємо збереження токена в базі
        await tokenService.saveToken(userId, tokens.refreshToken)

        return { ...tokens, user: user}

    }


    
}


module.exports = new UserService()