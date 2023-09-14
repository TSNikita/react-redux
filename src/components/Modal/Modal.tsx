import React, {useEffect, useRef} from 'react';
import styled  from "styled-components";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import {ProductModel} from "../../product.model";


const ContainerModalWraper = styled.div`
  background-color: rgba(82, 82, 82, 0.54);
  //position: fixed;
  //  top: 0;
  //left: 0;
  //right: 0;
  //bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`



const ModalBlock = styled.div`
  width: 400px;
  height: 300px;
  background-color: lightblue;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 280px;
  left: 670px;
  right: 0;
  bottom: 0;
  
`

const TitleModal = styled.h1`
color: black;
  font-size: 25px;
  font-weight: bold;
`

const BlockClose = styled.button`
width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  right: 628px;
  top: 250px;
  border: 1px solid red;
  &:hover {
    border: 1px solid black;
  }
  svg {
    path{
      fill: black;
    }
  }
`

const DivPosition = styled.div`
  background-color: rgba(82, 82, 82, 0.54);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`

interface ModalProps {
    title: string,
    visible: boolean
    children: React.ReactNode,
    onClose: () => void,
    onClick: () => void,
    onSubmit?: (product: Partial<ProductModel>) => void
}


const Modal: React.FC<ModalProps> = ({title, visible, children, onClose}) => {
const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const checkOutside = (e: any) => {
            if(visible && ref.current && !ref.current.contains(e.target)) {
                onClose()
            }
        }
        document.addEventListener("mousedown", checkOutside)

        return () => {
            document.removeEventListener("mousedown", checkOutside)
        }

    }, [visible])

    return (
        <>
            {visible &&
                    <ContainerModalWraper ref={ref} >
                        <ModalBlock>
                            <TitleModal>{title}</TitleModal>
                            {children}
                        </ModalBlock>
                        <BlockClose onClick={onClose} >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.9394 10.0001L2.46973 3.53039L3.53039 2.46973L10.0001 8.9394L16.4697 2.46973L17.5304 3.53039L11.0607 10.0001L17.5304 16.4697L16.4697 17.5304L10.0001 11.0607L3.53039 17.5304L2.46973 16.4697L8.9394 10.0001Z"/>
                            </svg>
                        </BlockClose>
                    </ContainerModalWraper>
            }
        </>
    );
}

export default Modal;