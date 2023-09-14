import React from 'react';
import PropTypes from 'prop-types';
import {ProductModel} from "../../../product.model";
import styled from "styled-components";
import Description from "../Description/Description";
import {useNavigate} from "react-router-dom";



type OneProductPropsType = {
    productInfo: ProductModel | undefined
}

const  ProductDescriptionItem: React.FC<OneProductPropsType> = ({productInfo}) => {
    const navigate = useNavigate()

    const handlerBack = () => {
        navigate(-1)
    }

    return (
        <DivContainer>
            <ButtonStyleBak type='button' onClick={handlerBack}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 18.75H33.75C34.0815 18.75 34.3995 18.8817 34.6339 19.1161C34.8683 19.3505 35 19.6685 35 20C35 20.3315 34.8683 20.6495 34.6339 20.8839C34.3995 21.1183 34.0815 21.25 33.75 21.25H8.75C8.41848 21.25 8.10054 21.1183 7.86612 20.8839C7.6317 20.6495 7.5 20.3315 7.5 20C7.5 19.6685 7.6317 19.3505 7.86612 19.1161C8.10054 18.8817 8.41848 18.75 8.75 18.75Z" fill="black"/>
                    <path d="M9.26583 20.0016L19.6333 30.3666C19.868 30.6013 19.9999 30.9196 19.9999 31.2516C19.9999 31.5835 19.868 31.9019 19.6333 32.1366C19.3986 32.3713 19.0803 32.5032 18.7483 32.5032C18.4164 32.5032 18.098 32.3713 17.8633 32.1366L6.61333 20.8866C6.49692 20.7705 6.40456 20.6325 6.34155 20.4807C6.27853 20.3288 6.24609 20.166 6.24609 20.0016C6.24609 19.8372 6.27853 19.6744 6.34155 19.5225C6.40456 19.3706 6.49692 19.2327 6.61333 19.1166L17.8633 7.86658C18.098 7.63186 18.4164 7.5 18.7483 7.5C19.0803 7.5 19.3986 7.63186 19.6333 7.86658C19.868 8.1013 19.9999 8.41964 19.9999 8.75158C19.9999 9.08352 19.868 9.40186 19.6333 9.63658L9.26583 20.0016Z" fill="black"/>
                </svg>

                </ButtonStyleBak>
            <TitleStyle>{productInfo?.title}</TitleStyle>
            <DivWrapperInfo>
                <div>
                    <ImgStyle src={productInfo?.image} alt='imgProduct'/>
                    <DivPrice>$ {productInfo?.price}</DivPrice>
                </div>
                <div>
                    <DescStyle>{productInfo?.description}</DescStyle>
                    <DivRattingStyle>
                        <TitleRating>Рейтинг {productInfo?.rating?.rate}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.375 7.87691H12.2187L10 0.9375L7.78125 7.87691H0.625L6.40625 12.1593L4.21875 19.0675L10 14.7851L15.7812 19.0675L13.5625 12.1281L19.375 7.87691Z" fill="#FFCE31"/>
                            </svg>

                        </TitleRating>
                        <TitleCount>Куплено {productInfo?.rating?.count} раз</TitleCount>
                    </DivRattingStyle>
                </div>

            </DivWrapperInfo>
            <ButtonStyleBuy type='submit'>Купить</ButtonStyleBuy>

        </DivContainer>
    );
}

export default ProductDescriptionItem;