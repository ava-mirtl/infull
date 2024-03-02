import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import welcome from "../../assets/welcome.avif";
import styles from "./auth.module.scss";

const Auth = () => {
    const [isNewUser, setIsNewUser] = useState(false);

    return (
        <div className={styles.box}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <img
                        src={welcome}
                        alt="welcome back"
                        className={styles.img}
                    />

                    {isNewUser ? <RegistrationForm /> : <LoginForm />}

                    <div>
                        <input
                            type="checkbox"
                            id="newUserCheckbox"
                            checked={isNewUser}
                            onChange={() => setIsNewUser(!isNewUser)}
                            className={styles.checkbox}
                        />
                        <label
                            className={styles.label}
                            htmlFor="newUserCheckbox"
                        >
                            У меня еще нет аккаунта
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
