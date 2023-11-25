import { Link, useLocation } from "react-router-dom" // linkar com as rotas 
import { CaixaMenu, Casa, Container, Li, Menu, Ol, Opcoes } from "./style"

import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'

import Logo from '../../../public/Img/logo (2).png'

function Header(){
    const { pathname} = useLocation()
   
    return(
        
            <Container>             
                <Menu>   
                    
                    <Casa isActive={pathname === '/'}>
                        <Link to={'/'}><AiOutlineHome/></Link>
                    </Casa>
                    <Casa><AiOutlineMenu/></Casa>
                    <CaixaMenu>
                        <Opcoes>
                            <img src={Logo} alt="logo" />
                            <ol>
                                <li>opções</li>
                                <li>opções</li>
                                <li>opções</li>
                                <li>opções</li>
                                <li>opções</li>
                                <li>opções</li>
                                <li>opções</li>
                                <li>opções</li>
                                <li>opções</li>
                                <li>opções</li>
                                <li>opções</li>
                                <li>opções</li>
                                <li>opções</li>
                                <li>opções</li>
                                
                            </ol>
                        </Opcoes>
                    </CaixaMenu>
                  
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