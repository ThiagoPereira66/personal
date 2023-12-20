import { Link, useLocation } from "react-router-dom"

import Peito from "../../../public/Img/peito.png"
import Abdomen from "../../../public/Img/abdomen.png"
import Costas from "../../../public/Img/costas.png"
import Gluteos from "../../../public/Img/gluteos.png"
import Perna from "../../../public/Img/pernas.png"
import Triceps from "../../../public/Img/triceps.png"
import Poster from "../../../public/Img/Personal Trainer  Instrutor Fitness.png"
import Corrida from "../../../public/Img/corrida.png"


import { Banner, Card, Cards, Container, Img } from "./style"



function Exercicios() {
    const { pathname } = useLocation()

    return (
        <Container>
            <Banner src={Poster} alt="" />
            <Cards>
                <Card>
                <Link to={'/exercicios/peito'}>
                    <Img isActive={pathname.includes('peito')} src={Peito} alt="" />
                </Link>
                </Card>

                <Card>
                <Link to={'/exercicios/costas'}>
                    <Img isActive={pathname.includes('costas')} src={Costas} alt="" />
                </Link>
                </Card>

                <Card>
                <Link to={'/exercicios/triceps'}>
                    <Img isActive={pathname.includes('triceps')} src={Triceps} alt="" />
                </Link>
                </Card>

                <Card>
                <Link to={'/exercicios/abdomen'}>
                    <Img isActive={pathname.includes('abdomen')} src={Abdomen} alt="" />
                </Link>
                </Card>

                <Card>
                <Link to={'/exercicios/gluteos'}>
                    <Img isActive={pathname.includes('gluteos')} src={Gluteos} alt="" />
                </Link>
                </Card>

                <Card>
                <Link to={'/exercicios/perna'}>
                    <Img isActive={pathname.includes('perna')} src={Perna} alt="" />
                </Link>
                </Card>
            </Cards>
            <Banner src={Corrida} />

        </Container>
    )
}

export default Exercicios