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
width: 342px;
height: 354px;
margin-top: 11px;
margin-left: 36px;
`

export const Box = styled.div`
p{
    margin-bottom: 0px;
    margin-left: 20px;
}
`
export const InputLabel = styled.p`
letter-spacing: -0.408px;
color: #eee;
margin-left: 20px;
`
export const Input = styled.input`
display: flex;
padding: 19px 139px 18px 15px;
align-items: center;
margin-bottom: 42px;

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);

color: #fff;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;

`


