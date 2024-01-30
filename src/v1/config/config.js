// Підключаємо оточення
require("dotenv").config()

//! <================> APP STAGE <================>
// "dev", "prod", 
APP_STAGE = "dev"


//! <================> SERVER JS <================>
PROTOCOL = process.env.PROTOCOL || "http"
HOST = process.env.HOST || localhost
PORT = process.env.PORT || 3000
SERVER_URL = `${PROTOCOL}://${HOST}:${PORT}`


//! <================> DATABASE (ORACLE) <================>

DB_CLIENT = process.env.DB_CLIENT || "C://"

DB_POOL_CONFIG = process.env.DB_POOL_CONFIG || {

}



DB_CONFIG = process.env.DB_CONFIG || {

}



//! <================> COOKIE <================> https://habr.com/ru/articles/710578/
COOKIE_NAME = process.env.COOKIE_NAME || "ApiCookie"
COOKIE_OPTIONS = process.env.COOKIE_OPTIONS || {
    maxAge: 1000 * 60 * 60, // Час життя cookie -> 1h
    httpOnly: true, // true -> щоб ці cookie не можна було отримувати і змінювати в середині браузера з js
    secure: false, // true -> якщо використовуємо https
    
}



//! <================> JWT_TYPE <================>
JWT_TYPE = process.env.JWT_TYPE || "Bearer"


//! <================> JWT_ACCESS_OPTIONS <================>
JWT_ACCESS_OPTIONS = process.env.JWT_ACCESS_OPTIONS || {
    expiresIn: "30m",   // час життя токена

}
JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "secret1"


//! <================> JWN_REFRESH_OPTIONS <================>
JWN_REFRESH_OPTIONS = process.env.JWN_REFRESH_OPTIONS || {
    expiresIn: "8h",   // час життя токена

}
JWN_REFRESH_SECRET = process.env.JWN_REFRESH_SECRET || "secret2"



module.exports = {
    HOST,
    PORT,
    SERVER_URL,
    DB_CLIENT,
    DB_POOL_CONFIG,
    DB_CONFIG,
    COOKIE_NAME,
    COOKIE_OPTIONS,
    JWT_TYPE,
    JWT_ACCESS_SECRET,
    JWT_ACCESS_OPTIONS,
    JWN_REFRESH_SECRET,
    JWN_REFRESH_OPTIONS,
}