import React from "react";
import PropTypes from "prop-types";
import "../styles/Start.css";

import logo from '../images/logo_azul.png'; 


import {
    Link,
  } from "react-router-dom";

export const ButtonHover = props => {
    const {
        className, label, isDisabled
    } = props;
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <img src={logo} className="photo" alt="Logo" />;
            <Link to="/train">
                <button style={{outline: 'none'}}>
                    <span className={className} disabled={isDisabled}>
                        <span>{label}</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </span>
                </button>
            </Link>
        </div>
        

    )
};

ButtonHover.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    isDisabled: PropTypes.bool
};

ButtonHover.defaultProps = {
    className: "cta",
    label: "Start Demo",
    isDisabled: false
};

export default ButtonHover;