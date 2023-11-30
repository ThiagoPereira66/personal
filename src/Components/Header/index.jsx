import { Link, useLocation } from "react-router-dom" // linkar com as rotas 
import { CaixaMenu, Casa, Container, Li, Menu, Ol, Opcoes } from "./style"

import { AiOutlineHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaPersonSwimming } from "react-icons/fa6";
import { LuFileSpreadsheet } from "react-icons/lu";
import { CiLogin } from "react-icons/ci";
import { CiEdit, CiDumbbell, CiHeart } from "react-icons/ci";
import Logo from '../../../public/Img/logo (2).png'

import { useState } from "react";

function Header() {
    const { pathname } = useLocation()

    const [ abrir, setAbrir ] = useState(false);
   
    return (

        <Container>
            <Menu>

                <Casa isActive={pathname === '/'}>
                    <Link to={'/'}><AiOutlineHome /></Link>
                </Casa>
                <Casa ><AiOutlineMenu onClick={() => setAbrir(!abrir)} /></Casa>

                {abrir && (
                <CaixaMenu>
                    <Opcoes>
                        <img src={Logo} alt="logo" />
                        <button ><AiOutlineClose onClick={() => setAbrir(!abrir)}/></button>
                        <ol>
                            <Link to={'/login'}>
                                <li onClick={() => setAbrir(!abrir)}><CiLogin />Entrar</li>
                            </Link>

                            <Link to={'/avaliacao'}>
                                <li onClick={() => setAbrir(!abrir)}><CiEdit />Avaliação</li>
                            </Link>

                            <Link to={'/alongamento'}>
                                <li onClick={() => setAbrir(!abrir)}><FaPersonSwimming />Dicas de Treino</li>
                            </Link>
                            
                            <Link to={'/exercicios'}>
                                <li onClick={() => setAbrir(!abrir)}><CiDumbbell />Exercícios</li>
                            </Link>

                            <Link to={'plano-de-treino'}>
                                <li onClick={() => setAbrir(!abrir)}><LuFileSpreadsheet />Plano de treino</li>
                            </Link>

                            <Link to={'/dicas'}>
                                 <li onClick={() => setAbrir(!abrir)}><CiHeart />Dicas de Saúde</li>
                             </Link>

                        </ol>
                    </Opcoes>
                </CaixaMenu> 
                )}

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
