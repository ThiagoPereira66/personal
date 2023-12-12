import { Container, Form, Titulo } from './style'



function Login(){
    return(
        <Container>        
        <Titulo>Cadastre-se</Titulo>
        <Form>
            <label name='nome'>
                <input type="text" name='nome' placeholder="Nome" required autoFocus autoComplete/>
            </label>

            <label name='telefone'>
                <input type="text" name='telefone' placeholder="Celular" required autoComplete maxLength={11} pattern="([0-9]{11})"/>
            </label>

            <label name='email'>
                <input type="email" name='e-mail' placeholder="E-mail@gmail.com" required autoComplete/>
            </label>
            
            <textarea type="textarea" name='digite seu comentario' placeholder="Deixe um comentario" required />
                
            <button type='submit'>Enviar</button>
            
        </Form>
        </Container>
    )
}

export default Login