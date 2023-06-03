import React from "react";
import { ButtonCustomized } from "./styles";

const  Button = ({
    type,
    text,
    onClick,
}) =>{
   
    return(
        <ButtonCustomized 
        type={type}
        text={text}
        onClick={onClick}>
            {text}
        </ButtonCustomized>
    );
}

export default Button;