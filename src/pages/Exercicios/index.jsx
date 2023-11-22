import Peito from "../../../public/Img/peito.png"
import Abdomen from "../../../public/Img/abdomen.png"
import Costas from "../../../public/Img/costas.png"
import Gluteos from "../../../public/Img/gluteos.png"
import Perna from "../../../public/Img/pernas.png"
import Triceps from "../../../public/Img/triceps.png"
import Poster from "../../../public/Img/Personal Trainer  Instrutor Fitness.png"
import Corrida from "../../../public/Img/corrida.png"


import { Banner, Card, Container, Img } from "./style"



function Exercicios(){
    return(
        <Container>
           <Banner src={Poster} alt=""/> 
        <Card>
            <Img src={Peito} alt="" />
            <Img src={Costas} alt="" />
            <Img src={Triceps} alt="" />
            <Img src={Abdomen} alt="" />
            <Img src={Gluteos} alt="" />
            <Img src={Perna} alt="" />     
        </Card>
            <Banner src={Corrida} />
        
        </Container>
    )
}

export default Exercicios