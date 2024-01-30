const router = require("express").Router()
const userController = require("../controllers/userController")
const authMidlleware = require("../midlleware/authMidlleware")

const { body } = require("express-validator")


//! <================> END POINTS <================>

// авторизація
router.post("/login", userController.login)

// вихід
router.post("/logout", userController.logout)


// оновлення токенів робимо запит коли accessToken вмер за допомогою refreshToken
router.get("/refresh", userController.refresh)


// отримання інформація про користувачів (ЗАХИЩЕНИЙ)
router.get("/users", authMidlleware, userController.getUsers)




//! <================> EXPORT ROUTER <================>
module.exports = router