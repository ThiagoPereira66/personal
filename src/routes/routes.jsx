import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Dicas from "../pages/Dicas-De-Saude"
import PlanoDeTreino from "../pages/Plano-De-Treino"
import Exercicios from "../pages/Exercicios"
import Layout from "../layout/Layout";



function Rotas(){
    return(
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/dicas" element={<Dicas/>}/>
                <Route path="/plano-de-treino" element={<PlanoDeTreino/>}/>
                <Route path="/exercicios" element={<Exercicios/>}/>
            </Route>
    
        </Routes>
    )
}

export default Rotas