import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import PostServices from "../../api/PostServices";
import ValidationSchema from "./ValidationSchema";
import styles from "./auth.module.scss";

const RegistrationForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            await PostServices.sendData(
                "http://infull/api/auth/registration",
                values,
                navigate
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.form}>
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <div className={styles.input_box}>
                            <label htmlFor="name">Логин</label>
                            <Field
                                className={styles.input}
                                type="text"
                                id="name"
                                name="name"
                                validate={ValidationSchema.validateLogin}
                            />
                        </div>

                        <ErrorMessage
                            className={styles.error}
                            name="name"
                            component="div"
                        />
                    </div>
                    <div>
                        <div className={styles.input_box}>
                            <label htmlFor="email">Email</label>
                            <Field
                                className={styles.input}
                                type="email"
                                id="email"
                                name="email"
                                validate={ValidationSchema.validateEmail}
                            />
                        </div>
                        <ErrorMessage
                            className={styles.error}
                            name="email"
                            component="div"
                        />
                    </div>
                    <div>
                        <div className={styles.input_box}>
                            <label htmlFor="password">Пароль</label>
                            <Field
                                className={styles.input}
                                type="password"
                                id="password"
                                name="password"
                                validate={ValidationSchema.validatePassword}
                            />
                        </div>
                        <ErrorMessage
                            className={styles.error}
                            name="password"
                            component="div"
                        />
                    </div>
                    <div>
                        <div className={styles.input_box}>
                            <label></label>
                            <Button type="submit" txt="Зарегистрироваться"/>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;
