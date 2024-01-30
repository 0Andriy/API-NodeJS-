const config = require("../config/config")
const userService = require("../services/userService")
const ApiError = require("../exceptions/apiErrors")
const { validationResult } = require("express-validator")



class UserController {
    // авторизація користувача
    async login (req, res, next) {
        try {
            // дістаємо дані з тіла (декомпозиція)
            const { login, password } = req.body

            // валідуємо користувача
            const userData = await userService.login(login, password)

            // вставляємо рефреш токен в cookie клієнту
            res.cookie(config.COOKIE_NAME, userData.refreshToken, config.COOKIE_OPTIONS)

            // відповідаємо клієнту
            return res.status(200).json(userData)

        } catch (error) {
            // пересилаємо помилку в errorMidlleware
            next(error)
        }
    }

    // вихід користувача
    async logout (req, res, next) {
        try {
            // дістаємо рефреш токен з cookie клієнта
            const { refreshToken } = req.cookie

            // знищуємо токен в базі даних і розлогінюємо користувача
            const token = await userService.loggout(refreshToken)

            // удаляємо cookie у клієнта
            res.clearCookie(config.COOKIE_NAME)

            // вертамо відповідь, що розлогінення пройшло успішно
            return res.status(200).json()

        } catch (error) {
            // пересилаємо помилку в errorMidlleware
            next(error)
        }
    }

    // рефреш токена користувача
    async refresh (req, res, next) {
        try {
            // дістаємо refreshToken з cookie клієнта
            const { refreshToken } = req.cookie

            // валідуємо користувача
            const userData = await userService.refresh(refreshToken)

            // вставляємо рефреш токен в cookie клієнту
            res.cookie(config.COOKIE_NAME, userData.refreshToken, config.COOKIE_OPTIONS)

            // відповідаємо клієнту
            return res.status(200).json(userData)
            
        } catch (error) {
            // пересилаємо помилку в errorMidlleware
            next(error)
        }
    }


    // отримання користувача
    async getUsers (req, res, next) {
        try {
            res.status(200).json([200, 500])
            
        } catch (error) {
            // пересилаємо помилку в errorMidlleware
            next(error)
        }
    }
    
}



module.exports = new UserController()