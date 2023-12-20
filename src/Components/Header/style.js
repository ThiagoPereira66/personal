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

@media screen and (min-width: 950px) {
    display: none;
}

`
export const Li = styled.li`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 600;
position: relative;

a{
color: #2e2e2e;
font-size: 3vw;

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

@media screen and (min-width: 950px) {
    display: none;
}

`
export const CaixaMenu = styled.div`
width: 100%;
height: 100%;
position: fixed;
right: 0;
top: 0;
background-color: rgba(0, 0, 0, .5);
z-index: 1000;

@media screen and (min-width: 950px) {
    display: none;
}

`

export const CaixaMenuWeb = styled.div`
position: fixed;
right: .2rem;
top: 3em;
z-index: 1000;
display: none;

@media screen and (min-width: 950px) {
    display: block;
    width: 15vw;
    height: 35rem;
    position: fixed;    
}

`

export const Opcoes = styled.div`
width: 70%;
height: 100%;
background-color: #fff;
position: absolute;
right: 0;

img{
    width: 100%;
    position: relative;
}

ol{
    overflow-x: hidden;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;    
    height: 80%;
    
}

li{
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    width: 90%;
    padding: .5rem 0;
    display: flex;
    gap: 1.5rem;

}

li:hover{
    background-color: #9d9d93;
    color: white;
    transition: .6s;
}

a{
    color: #2e2e2e;
}

a:hover{
    color: white;
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

@media screen and (min-width: 620px) {
   width : 30%; 

}


@media screen and (min-width: 950px) {
    width: 100%;
    border: 1px solid silver;
    border-radius: .2rem;
}
`




export const Menu = styled.div`
width: 100%;
background-color: #dbdbdb;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;



`
