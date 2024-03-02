import { useLocation, useNavigate } from "react-router-dom";
import error_pic from "../../assets/error.png";
import Button from "../../components/Button";
import styles from "./error.module.scss";

function Error() {
    const location = useLocation();
   const navigate = useNavigate();
   const handleClick = () =>{
    navigate("/auth")
   }
    return (
        <div className={styles.box}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    {location.state.error? <p>{location.state.error}</p>:<p>Упс! Что-то пошло не так</p>}

                    <img
                        src={error_pic}
                        alt="cat octopus"
                        className={styles.img}
                    />
                <div className={styles.btn_box}>
                    <Button
                        func = {handleClick}
                        type="button"
                        txt="Выйти"
                   />
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Error;
