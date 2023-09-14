import React, { MouseEvent } from 'react';
import styled from "styled-components";
import {ProductModel} from "../../product.model";

const ButtonStyle = styled.div`
margin-bottom: 50px;
  
  button{
    width: 150px;
    height: 30px;
    border: none;
    border-radius: 10px;
    background-color: burlywood;
    color: black;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: green;
      color: white;
    }
  }
`

interface ButtonPropsType {
    title: string,
}

const Button: React.FC<ButtonPropsType> = ({title}) => {
    return (
        <ButtonStyle>
            <button type='submit' >{title}</button>
        </ButtonStyle>
    );
}

export default Button;