import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import styles from './Menu.module.scss'
import { MenuContext } from '../../Contexts/MenuContext';



const Menu = ({className}) => {

  const {active} = useContext(MenuContext);
  
  const isActive = active.value;
  const setIsActive = active.set



  const changeStatus = () => {
    setIsActive(!isActive);
    console.log("status changed")
  }
  
  useEffect(() => {
    if(isActive === true){
      
    }

  }, [isActive])
  
  


  return (
    <div className={`${styles.menu} ${className} ${isActive ? styles.active : ""}`} onClick={changeStatus}>
      <span className={styles.central}></span>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Menu;