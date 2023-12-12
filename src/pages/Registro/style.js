import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
`

export const Titulo = styled.h1`
margin: 1rem 0;
font-weight: bold;

`

export const Form = styled.form`
width: 25rem;
margin-top: 2rem;
padding: 1rem;
background-color: rgba(0, 0, 0, .2);
border-radius: .3rem;
border: none;
text-align: center;


input,textarea{
    margin-bottom: 1.5rem;
    width: 100%;
    position: relative;
    padding: .7rem .5rem;    
    border: none;
    border-radius: .2rem;
    border-bottom: 1px solid black;
    outline: none;
    
}

button{
padding: .7rem 5rem;
border-radius: 1.5rem;
cursor: pointer;
box-shadow: inset 0 0 10px 0 black;
border: none;
font-weight: bold;
background-color: #fff;

}

`