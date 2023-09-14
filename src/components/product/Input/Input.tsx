import React, {useState} from 'react';
import styled from "styled-components";

const InputContainer = styled.div`
margin-bottom: 30px;
`

const InputStyle = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 10px;
  text-align: center;
`

interface InputProps {
    placeholder: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    className: {}
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {

    return (
        <InputContainer>
            <input type="text" className={`input ${className}`} {...props} />
        </InputContainer>
    );
}

export default Input;