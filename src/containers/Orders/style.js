import styled from 'styled-components'
import Background from '../../assets/Background.svg'


export const Container = styled.div`
background: url("${Background}");
background-size: cover;

height: 100%;
display: flex;
flex-direction: column;
align-items: center;

`
export const Image = styled.img`
width: 264px;
height: 354px;
margin-top: 11px;
margin-left: 36px;
`

export const Order = styled.li`
width: 342px;
height: 101px;

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
margin-bottom: 18px;
list-style-type: none;

display: flex;
flex-direction: column;

.pedido{
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    padding: 17px 27px 0px ;
}
.name{
    padding-left: 27px;
    padding-bottom: 13px;

    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #fff;
}
button{
    width: 24px;
    height: 28px;

   display: flex;
   background: none;
   border: none;
   justify-content: space-between;

   margin-left: 303px;
   margin-right: 15px;

   cursor: pointer;

}
`
