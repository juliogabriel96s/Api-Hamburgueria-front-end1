import styled from 'styled-components'
export const Button = styled.button`
margin-top: 34px;
margin-bottom: 51px;

display: flex;
width: 342px;
height: 68px;
padding: 0px 113px;
justify-content: center;
align-items: center;

background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : ' #D93856'};
color: #fff;
text-align: center;
font-size: 17px;
font-style: normal;
font-weight: 900;
line-height: 2.5px;
cursor: pointer;

`
