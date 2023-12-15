import Aquecimento from '../../../public/Img/aquecimento.png'
import Descanso from '../../../public/Img/descanco.png'
import Equipamentos from '../../../public/Img/equipamentos.png'
import EscuteOCorpo from '../../../public/Img/escute-seu-corpo.png'
import Hidratacao from '../../../public/Img/hidratacao.png'
import Motivacao from '../../../public/Img/motivado.png'
import Progresso from '../../../public/Img/progresso.png'
import Tecnica from '../../../public/Img/tecnica.png'
import Variedade from '../../../public/Img/variedade.png'
import Alimentacao from '../../../public/Img/alimentacao.png'

import { Container, Img } from './style'
 
 function Dicas(){
    return(
        <Container>
        <Img src={Alimentacao} alt="" />
        <Img src={Aquecimento} alt="" />
        <Img src={Descanso} alt="" />
        <Img src={Equipamentos} alt="" />
        <Img src={EscuteOCorpo} alt="" />
        <Img src={Hidratacao} alt="" />
        <Img src={Motivacao} alt="" />
        <Img src={Progresso} alt="" />
        <Img src={Tecnica} alt="" />
        <Img src={Variedade} alt="" />
        
        </Container>
    )
 }

 export default Dicas