import { useNavigate } from "react-router-dom";
import styles from "./components.module.scss";

function Button({txt, type, navig, func}) {
    const navigate = useNavigate();

    return (
        navig? 
                    <button
                        className={styles.btn}
                        onClick = {navigate(navig)}
                        type={type}>
                        {txt}
                    </button>
                    :
                    <button
                        className={styles.btn}
                       onClick ={ func? ()=>func():()=>{}}
                        type={type}>
                        {txt}
                    </button>
    );
}

export default Button;
