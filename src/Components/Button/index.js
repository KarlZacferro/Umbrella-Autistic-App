import React from "react";
import { ButtonCustomized } from "./styles";

const  Button = ({
    type,
    text,
    onClick,
    disabled,
}) => {
   
    return(
        <ButtonCustomized 
        type={type}
        text={text}
        
        onClick={onClick}
        disabled={disabled}
        >
            {text}
        </ButtonCustomized>
    );
}

export default Button;