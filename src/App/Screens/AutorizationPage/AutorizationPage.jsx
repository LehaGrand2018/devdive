import React, { useState, useEffect } from 'react';
import styles from './AutorizationPage.module.scss';

import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import { element, elementType } from 'prop-types';
import LoginForm from '../../Components/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import GlobalStore from '../../Stores/GlobalStore';


const AutorizationPage = observer(({className}) => {

  // const isRegistered = "false";
  const [isRegistered, setIsRegistered] = useState("true");
  const [element, setElement] = useState(null)
  const {isLoggedIn} = GlobalStore;
  const navigate = useNavigate();
  useEffect(() => {

    let isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("isReg: ", isRegistered)
    console.log(element)
    if(isLoggedIn === "true"){
      navigate("/")
    }
    if(isRegistered === "true") {
      setElement(<LoginForm className={styles.LoginForm} loginFunc={() => {}} registrationFunc={()=>{setIsRegistered("false")}} />)
    } else{
      setElement(<RegistrationForm className={styles.RegistrationForm} loginFunc={()=>{setIsRegistered("true")}}/>)
    }
    console.log(element)
  }, [isRegistered, isLoggedIn])

  console.log("Before return")
  console.log(element)
  return (
    <div className={`${styles.AutorizationPage} ${className}`}>
      <h2 className={styles.header}>Авторизация</h2>
      {element}
    </div>
  );
});

export default AutorizationPage;