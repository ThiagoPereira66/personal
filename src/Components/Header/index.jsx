import { Link, useLocation } from "react-router-dom" // linkar com as rotas 
import { CaixaMenu, Casa, Container, Li, Menu, Ol, Opcoes } from "./style"

import { AiOutlineHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaPersonSwimming } from "react-icons/fa6";
import { LuFileSpreadsheet } from "react-icons/lu";
import { CiEdit, CiDumbbell, CiHeart } from "react-icons/ci";
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
                            <button><AiOutlineClose/></button>
                            <ol>
                                <li><CiEdit/>Avaliação</li>
                                <li><FaPersonSwimming/>Dicas de Treino</li>
                                <li><CiDumbbell />Exercícios</li>
                                <li><LuFileSpreadsheet/>Plano de treino</li>
                                <li><CiHeart/>Dicas de Saúde</li>
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