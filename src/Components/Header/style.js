import styled from "styled-components";


export const Container = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
background-color: #228B22;

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
color: #DCDCDC;

}

&::after{
    content: '';
    height: 3px;
    width:${(props) => (props.isActive ? '100%' : 0)};
    background-color: #C0C0C0;
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
    color:#DCDCDC;
}
font-size: 2rem;
    color:#DCDCDC;

`


export const Menu = styled.div`
width: 100%;
background-color: #008000;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;


`
