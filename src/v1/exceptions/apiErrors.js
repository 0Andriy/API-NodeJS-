module.exports = class ApiError extends Error {
    status;
    error;

    // конструктор який генерує об'єкт
    constructor(status, message, errors = []) {
        super(message)
        this.status = status
        this.errors = errors
    }

    // статична функція, які можна використовувати не створючи обєкта цього класу
    static UnavthorizeError() {
        return new ApiError(401, "Користувач не авторизований")
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }
}