//! <================> Підключаємо бібліотеки <================>
// Загальні налаштування
const config = require("./v1/config/config")

// Підключаємо Express (server)
const express = require("express")

// Підключаємо для нормальної роботи з cookie
const cookieParser = require("cookie-parser")

// Крос домені запити
const cors = require("cors")


// перевірка валідності користувача для захисту endpoints, на яких він буде включений
const authMidlleware = require("./v1/midlleware/authMidlleware")

//! <================> Create server <================>
const app = express()


//! <================> Connect middleware start <================>
app.use(express.json())
app.use(cookieParser())
// app.use(cors)




//! <================> Connect routers <================>
// тестовий
app.get("/", (req, res) => {
    res.status(200).send('API WORKING ...')
})


app.use("/api/v1", require("./v1/routes/userRouter"))



//! <================> Connect middleware end <================>
// проміжне програмне забезпечення для помилок (обов'язково самий останій)
const errorMidlleware = require("./v1/midlleware/errorMidlleware")
app.use(errorMidlleware)



//! <================> Run server <================>

const server = async () => {
    try {
        app.listen(config.PORT, config.HOST, () => {
            console.log(`-> Server started: http://${config.HOST}:${config.PORT}`)
        })

    } catch (error) {
        console.log(error)
    }
}


// запусукаємо функція запуску
server()


