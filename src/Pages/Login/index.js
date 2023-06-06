import React,{useState} from "react";
import { Container, Form } from "./styles";
import Input from "../../Components/Input";
import Button from "../../Components/Button";


const Login = () => {
    //state loading vai manipular as requisiçoes 
    const [loading, setLoading] = useState()

    //função feita para que a API busque as informaçoes no backend e logo apos continue executando 
    const handleSubmit = async (event)=>{ 
        event.preventDefault();
        try{
            setLoading(true)
            alert('Login')
            setLoading(false)
        }
        catch(err) {
            alert('Algo de errado não esta certo no Login' +err)

        }
    }

    //captura tanto o nome quanto o tipo do input
    const handleChange = (event) =>{
        console.log('Digitando...', event.target.name, event.target.value)
    }

    return (
       <Container>
        <Form>
            <h1>Faça o seu Login</h1>
       
        
        <Input
            name='email'
            placeholder='Digite o seu email'
            onChange={handleChange}
            type='email'
        />
        <Input
            name='password'
            placeholder='Digite a sua senha'
            onChange={handleChange}
            type='password'
            />
        <Button
            type='submit'
            text='Entrar!'
            onClick={handleSubmit}
        />
    
            <div>
                <p>Não possui conta</p>
                <a>cadastrar</a>
            </div>
        </Form>
       </Container>
    )
} 

export default Login;