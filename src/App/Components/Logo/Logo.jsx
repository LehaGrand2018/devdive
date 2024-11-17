import React from 'react';
import styles from './Logo.module.scss';
import PropTypes from 'prop-types';


const Logo = ({className, onClick}) => {
    return (
        <div className={`${styles.Logo} ${className}`} alt="" onClick={onClick}/>
    );  
};


Logo.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
}
export default Logo;