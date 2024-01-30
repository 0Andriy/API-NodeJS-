const jwt = require("jsonwebtoken")
const config = require("../config/config")


class TokenService {
    // генеруємо зразу два токена 
    generateTokens (payload) {
        const acsessToken = jwt.sign(payload, config.JWT_ACCESS_SECRET, config.JWT_ACCESS_OPTIONS)
        const refreshToken = jwt.sign(payload, config.JWN_REFRESH_SECRET, config.JWN_REFRESH_OPTIONS)
        return {
            acsessToken,
            refreshToken
        }
    }

    // валідація accessToken
    validateAccessToken (token) {
        try {
            const userData = jwt.verify(token, config.JWT_ACCESS_SECRET)
            return userData

        } catch (error) {
            return null
        }
    }

    // валідація refreshToken
    validateRefreshToken (token) {
        try {
            const userData = jwt.verify(token, config.JWN_REFRESH_SECRET)
            return userData

        } catch (error) {
            return null
        }
    }


    // зберігаємо рефреш токен у сховищі (базі..) для конкреного користувача
    async saveToken (userId, refreshToken) {
        // // пробуємо по даному юзеру знайти токен у сховищі (базі..), 
        // //  тоді коли користувач спробує зайти з іншого пристрою на старому його розлогінить
        // const tokenData = await

        // // якщо ми щось знайшли
        // if (tokenData) {
        //     // перезаписуємо в нього рефреш токен
        //     tokenData.refreshToken = refreshToken
        //     return tokenData
        // }

        // // якщо даних в сховищі (базі...) нема тоді створюємо
        // const token = await refreshToken
        // return token
    }

    // видалення токена з бази
    async removeToken (refreshToken) {
        // // шукаємо запис з токеном і її видаляємо
        // const tokenData = await
        return
    }

    // шукаємо токен в базі
    async findToken (refreshToken) {
        // // шукаємо запис з токеном
        // const tokenData = await
        return
    }
}



module.exports = new TokenService()