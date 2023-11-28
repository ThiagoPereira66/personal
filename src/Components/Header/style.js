import styled from "styled-components";


export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
background-color: #dbdbdb;
border-bottom: 1px solid #b7b7b7;

`


export const Ol = styled.ol`
width: 100%;
position: relative;
display: flex;
padding: 1rem 0 ;
justify-content: space-around;

`
export const Li = styled.li`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 600;
position: relative;

a{
color: #2e2e2e;

}

&::after{
    content: '';
    height: 3px;
    width:${(props) => (props.isActive ? '100%' : 0)};
    background-color: #111111;
    position: absolute;    
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: .6s;

}
`

export const Casa = styled.li`
a{
    font-size: 2rem;
    color:#2e2e2e;
}
font-size: 2rem;
    color:#2e2e2e;

`
export const CaixaMenu = styled.div`
width: 100%;
height: 100%;
position: fixed;
right: 0;
top: 0;
background-color: rgba(0, 0, 0, .5);
z-index: 100;
display: none;

`

export const Opcoes = styled.div`
width: 70%;
height: 100%;
background-color: #b5b5b5;
position: absolute;
right: 0;
border: none;

img{
    width: 100%;
    position: relative;
}

ol{
    overflow-y:auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;    
    height: 40rem;
    
}

li{
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    width: 90%;
    padding: .5rem 0;
    display: flex;
    gap: 1.5rem;
}

button{
    position: absolute;
    z-index: 101;
    top: 1rem;
    right: 1.5rem;    
    font-size: 2rem;
    color: white;
    background: none;
    border:none;
}
`




export const Menu = styled.div`
width: 100%;
background-color: #dbdbdb;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;



`
