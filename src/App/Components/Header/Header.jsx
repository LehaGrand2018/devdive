import { React, useContext, useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import styles from "./Header.module.scss";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import GlobalStore from "../../Stores/GlobalStore";
import { MenuContext } from "../../Contexts/MenuContext";
import { AuthContext } from "../../Contexts/AuthContext";


const Header = observer(({ className, isProfile, isAddQuestion}) => {

  const {active} = useContext(MenuContext);
  const {signOut} = useContext(AuthContext);
  const {isLoggedIn,} = GlobalStore;
  


  const navigate = useNavigate();
  
  const login = () => {
    navigate("/autorization");
  };
  
  const out = () => {
    signOut();
    navigate("/");
  };

  const questionButtonHandler = async () => {
    navigate("/addQuestion");
  }

  // const {active} = useContext(MenuContext)
  // console.log(active)

  //there will be username from server
  let username = "neurotrier";

  const [elements, setElements] = useState([]);

  useEffect(() => {
    let elements = [];
    if (isLoggedIn === "true") {
      if(isAddQuestion === "false"){
        elements.push(
          <Button
            key="questionButton"
            className={styles.questionButton}
            value="Задать вопрос"
            onClick={questionButtonHandler}
          ></Button>
        );
      }
      if (isProfile === "false") {
        elements.push(
          <div key="headerUser"className={styles.user}>
            <p className={styles.username}>
              {username}
            </p>
            <Link
              to="/profile"
              className={styles.profilePhoto}
              style={{ backgroundImage: "" }}
            ></Link>

          </div>
        );
      } else {

        elements.push(
          <Button
            key="signOutButton"
            className={styles.signInButton}
            value="Выход"
            onClick={out}
          ></Button>
        );
      }
    } else {
      elements.push(
        <Button
          key="signInButton"
          className={styles.signInButton}
          value="Вход"
          onClick={login}
        ></Button>
      );
    }
    setElements(elements);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, isProfile, isAddQuestion, username]);

  return (
    
    <header className={`${styles.header} ${className}`}>
      <Menu className={styles.menu} isActive={active.value} setIsActive={active.set} />
      <Logo className={styles.logo} onClick={()=> {navigate("/")}}/>
      {elements}
    </header>
  );
});

Header.propTypes = {
  className: PropTypes.string,
  isProfile: PropTypes.string,
  isAddQuestion: PropTypes.string,
};

export default Header;
