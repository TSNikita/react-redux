import React from 'react';


import Description from "../../Description/Description";

import {ContainerProductCard, ContainerContent,StyledLink, TitleStyle, ContainerImgDescp, ImageContainer, PriceStyle} from './Product-card.component.style'

type ProductCardProps = {
    title: string,
    image: string,
    price: number,
    description: string
}

const counLength = 150

const  ProductCard: React.FC<ProductCardProps> = ({title,image,price, description  }) =>  {

    return (

        <ContainerProductCard>
            <ContainerContent>
                <StyledLink to={title} >
                    <TitleStyle>{title}</TitleStyle>
                </StyledLink>
                <ContainerImgDescp>
                    <ImageContainer src={image} alt='img_Product' />
                    <Description title={description} maxLength={counLength} />
                </ContainerImgDescp>
                <PriceStyle>$ {price}</PriceStyle>
            </ContainerContent>

        </ContainerProductCard>

    );
}

export default ProductCard;