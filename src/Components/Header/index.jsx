import { Link, useLocation } from "react-router-dom" // linkar com as rotas 
import { Casa, Container, Li, Menu, Ol } from "./style"

import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'


function Header(){
    const { pathname} = useLocation()
   
    return(
        
            <Container>             
                <Menu>   
                    
                    <Casa isActive={pathname === '/'}>
                        <Link to={'/'}><AiOutlineHome/></Link>
                    </Casa>
                    <Casa><AiOutlineMenu/></Casa>
                  
                </Menu>

                <Ol>
                    <Li isActive={pathname.includes('dicas')}>
                        <Link to={'/dicas'}>DICAS DE SAÚDE</Link>
                    </Li>

                    <Li isActive={pathname.includes('exercicios')}>
                        <Link to={'/exercicios'}>EXERCÍCIOS</Link>
                    </Li>

                    <Li isActive={pathname.includes('plano-de-treino')}>
                        <Link to={'/plano-de-treino'}>PLANOS DE TREINO</Link>
                    </Li>
                </Ol>

            </Container>
        
    )
}

export default Header