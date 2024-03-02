class ValidationSchema {
    static validatePassword = (value) => {
        if (!value) {
            return "Пароль обязателен для заполнения";
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value)) {
            return "Пароль должен содержать символы в разных регистрах и цифры, минимум 6 символов";
        }
        return null;
    };

    static validateEmail = (value) => {
        if (!value) {
            return "Email обязателен для заполнения";
        } else if (
            !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
                value
            )
        ) {
            return "Пожалуйста, введите корректный email адрес";
        }
        return undefined;
    };

    static validateLogin = (value) => {
        if (!value) {
            return "Имя пользователя обязательно для заполнения";
        } else if (!/^[a-z][a-z0-9]*?([-_][a-z0-9]+){0,2}$/i.test(value)) {
            return 'Имя пользователя может содержать только латинские буквы, цифры и символы "-" и "_", но не должно заканчиваться на них. Например, "hello", "hello-world" или "hello_world"';
        }
        return undefined;
    };
}

export default ValidationSchema;
