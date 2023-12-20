import styled from "styled-components";

export const Container = styled.div`
background-color: #e5e5e5;
display: flex;
flex-direction: column;
align-items: center;
`

export const Cards = styled.div`
width: 100%;
position: relative;
padding: .5rem;
display: flex;
flex-wrap: wrap;
justify-content: space-between;



@media screen and (min-width: 950px){
    width: 100%;    
    justify-content: space-around;
    padding: 0 9rem;
       
}

`

export const Card = styled.div`

@media screen and (min-width: 950px){    
    width: 36%;    
}
`



export const Img = styled.img`
width: 45vw;
border-radius: .5rem;
margin-bottom: 2rem;
box-shadow: 0 0 7px black;
transition: .5s;

&:hover{
    transform: scale(1.08);
}

@media screen and (min-width: 950px){
    width: 100%;
    position: relative;
}

`

export const Banner = styled.img`
width: 100%;
margin: .5rem 0;
`