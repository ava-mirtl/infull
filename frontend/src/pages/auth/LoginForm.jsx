import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import ValidationSchema from './ValidationSchema';
import Button from "../../components/Button";
import PostServices from '../../api/PostServices';
import styles from './auth.module.scss';


const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
    await PostServices.sendData('http://infull/api/auth/login', values, navigate);
    } catch (error) {
        console.log(error);
    }
  }
    return ( 
    <div className={styles.form}  >
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
<Form>
          <div>
            <div className={styles.input_box}>    
              <label htmlFor="email">Email</label>
            <Field className={styles.input} type="text" id="email" name="email" validate={ValidationSchema.validateEmail}/>
            </div>
            <ErrorMessage className={styles.error} name="email" component="div" />
          </div>
          <div>
          <div className={styles.input_box}>    
            <label htmlFor="password">Пароль</label>
            <Field  className={styles.input} type="password" id="password" name="password" validate={ValidationSchema.validatePassword}/>
            </div>
            <ErrorMessage className={styles.error} name="password" component="div" />
          </div>
          <div>
            <div className={styles.input_box}>    

          <label ></label>
          <Button type="submit" txt="Войти в аккаунт"/>
          </div>
          </div>

        </Form>      
        </Formik>
    </div>
  );}
  
  export default LoginForm;
     