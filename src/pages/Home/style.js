import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
background-color: #000;

`

export const Video = styled.video`
position: absolute;
width: 100%;
background-size: cover;

`

export const Botao = styled.button`
position: absolute;
z-index: 100;
top: 27rem;
left: 4rem;
padding: 1rem 5rem;
font-size: 2rem;
border-radius: 3rem;
border: none;
background-color: rgba(0, 0 ,0 , .2);
color: #fff;
box-shadow: 0 0 22px 5px green;
`