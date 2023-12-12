import Videos from '../../../public/Video/P. Ataide (1).mp4'
import { Video } from './style'


function Home (){
    return(

        <>        
        <Video src={Videos} autoPlay loop></Video>        
        </>
    )
    
}

export default Home