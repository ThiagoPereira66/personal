import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Dicas from "../pages/Dicas-De-Saude"
import PlanoDeTreino from "../pages/Plano-De-Treino"
import Exercicios from "../pages/Exercicios"
import Layout from "../layout/Layout";

// rotas dos exercicios 
import Peito from "../pages/Exercicios/Peito"
import Perna from "../pages/Exercicios/Pernas"
import Costas from "../pages/Exercicios/Costas"
import Triceps from "../pages/Exercicios/Triceps"
import Abdomen from "../pages/Exercicios/Abdomen"
import Gluteos from "../pages/Exercicios/Gluteos"
import Login from "../pages/Registro/indx";
import Avaliacao from "../pages/Avaliacao";
import Alongamento from "../pages/Alongamento"


function Rotas(){
    return(
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/dicas" element={<Dicas/>}/>
                <Route path="/plano-de-treino" element={<PlanoDeTreino/>}/>
                <Route path="/exercicios" element={<Exercicios/>}/>
                

                <Route path="/exercicios/peito" element={<Peito/>}/>
                <Route path="/exercicios/perna" element={<Perna/>}/>
                <Route path="/exercicios/costas" element={<Costas/>}/>
                <Route path="/exercicios/triceps" element={<Triceps/>}/>
                <Route path="/exercicios/abdomen" element={<Abdomen/>}/>
                <Route path="/exercicios/gluteos" element={<Gluteos/>}/>


                <Route path="/login" element={<Login/>}/>
                <Route path="/avaliacao" element={<Avaliacao/>} />
                <Route path="/alongamento" element={<Alongamento/>}/>
            </Route>
    
        </Routes>
    )
}

export default Rotas