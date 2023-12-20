import Videos from '../../../public/Video/P. Ataide (1).mp4'
import { Botao, Container, Video } from './style'
import { Link } from 'react-router-dom'

function Home() {

    return (
        <>
        <Container>
            <Video src={Videos} autoPlay muted loop></Video>
            <Link to={'/exercicios'}>
                <Botao >Acessar</Botao>
            </Link>
        </Container>

        {/* para web */}

        <div>
            
        </div>
        </>
    )

}

export default Home