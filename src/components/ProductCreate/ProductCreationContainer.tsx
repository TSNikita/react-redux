import React, { useCallback, useState} from 'react';
import Modal from "./Modal/Modal";
import CreateButton from "./CreateButton/CreateButton";
import Button from "./Button/Button";
import {useAppDispatch} from "../hooks/hooks";
import { createProductApi} from "../store/product/product.slice";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

import ModalContainer from "./ModalContainer";

import {FormStyle, InputName, InputDesc} from './ProductCreation.style'

function ProductCreationContainer() {
    const[modalVisible, setModalVisible] = useState(false)
    const [valueTitle, setValueTitle] = useState<string>('')
    const [valueDesc, setValueDesc] = useState<string>('')

    const dispatch = useAppDispatch()

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueTitle(e.target.value)
    }

    const handleChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueDesc(e.target.value)
    }

    const handleModalVisible = useCallback(() => {
        setModalVisible(true)
    },[modalVisible])

    const onCloseVisible = useCallback(() => {
        setModalVisible(false)
    },[modalVisible])

    const submit = () => {
       const product = {valueTitle, valueDesc }
        if(valueTitle !== undefined) {
            dispatch(createProductApi(product))
            setModalVisible(false)
            setValueTitle('')
            setValueDesc('')
        }
    }

    return (
        <div>
            {modalVisible && <ModalContainer />}
            <CreateButton onClick={() => handleModalVisible()} />
            <Modal title="Create Product" visible={modalVisible} onClose={() => onCloseVisible()} onClick={() => onCloseVisible()}>
                <FormStyle onSubmit={submit} >
                    <InputName placeholder='Введите название' className={InputName} value={valueTitle} onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeTitle(e)} />
                    <InputDesc placeholder='Введите описание' className={InputDesc} value={valueDesc} onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeDesc(e)} />
                    <Button title='Create' />
                </FormStyle>
            </Modal>
        </div>
    );
}

export default ProductCreationContainer;