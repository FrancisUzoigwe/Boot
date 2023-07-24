import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom"

interface iButh {
    text?: string;
    col?: string;
    bg?: string;
    hcol?: string;
    hbg?: string;
    link?: string;
}
const ButtonProps: React.FC<iButh> = ({text, col, bg, hcol, hbg, link}) => {
  return (
    <div>
      <Button col={col!} hbg={hbg!} hcol={hcol!} bg={bg!} to={link!}>{text}</Button>
    </div>
  )
}

export default ButtonProps
const Button = styled(Link)<{bg: string, col: string, hbg: string, hcol: string}>`
padding: 7px 15px;
border-radius: 5px;
border: none;
background-color: ${({bg}) => bg};
color: ${({col}) => col};
transition:  all 350ms;
text-decoration: none;

:hover{
    cursor: pointer;
    background-color: ${({hbg}) => hbg};
    color: ${({hcol}) => hcol};
}
`;