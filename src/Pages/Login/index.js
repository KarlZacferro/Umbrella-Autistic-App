import React from "react";
import { Container, Form } from "./styles";
import Input from "../../Components/Input";


const Login = () => {
    return (
       <Container>
        <Form>
        <Input></Input>
        <Input></Input>
        <Input></Input>

            <h1>Faça o seu login:  </h1>
            <div>
                <p>Não possui conta</p>
                <a>cadastrar</a>
            </div>
        </Form>
       </Container>
    )
} 

export default Login;