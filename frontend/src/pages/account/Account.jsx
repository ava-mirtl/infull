import { useLocation, useNavigate } from "react-router-dom";
import lorem from "../../assets/Lorem1.webp";
import Button from "../../components/Button";
import PostServices from "../../api/PostServices";
import styles from "./account.module.scss";


function Account() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = async () => {
      try {
          await PostServices.logout(
              "http://infull/api/auth/logout",
              location.state[1].token, 
              navigate
          );
      } catch (error) {
          console.log(error);
      }
  };

    return (
        <div className={styles.box}>
            <div className={styles.wrapper}>
                <div className={styles.aside}>
                    <p>Infull Group</p>
                    <ul className={styles.nav}>
                        <li>Lorem, ipsum</li>
                        <li>Dolor sit amet</li>
                        <li>Consectetur</li>
                        <li>Adipisicing</li>
                        <li>Possimus</li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.header}>
                        Вы успешно авторизовались, {location.state[0].name}
                    </h2>
                    <div className={styles.mail}><p>{location.state[0].email}</p> <div className={styles.btn_box}> <Button txt='Выйти' func={handleClick} type='button'/> </div></div>
                    
                    <img src={lorem} alt="lorem ipsum" className={styles.img} />
                    <div className={styles.txt}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo, eos quod? Repellat expedita praesentium pariatur
                        enim sed, blanditiis suscipit assumenda, velit
                        architecto totam laudantium quia incidunt ducimus
                        reiciendis temporibus in!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
