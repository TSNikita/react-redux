import styled from "styled-components";
import Input from "./product/Input/Input";

export const FormStyle = styled.form`
margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DivStyle = styled.div`
  background-color: rgba(82, 82, 82, 0.54);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const InputName = styled(Input)`
  width: 300px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 10px;
  text-align: center;
`

export const InputDesc = styled(Input)`
  width: 300px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 10px;
  text-align: center;
`