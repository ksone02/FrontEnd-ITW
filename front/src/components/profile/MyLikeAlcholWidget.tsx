import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Star from '../common/Star';

type myliketype = {
    AlcoholName: string;
    star: number;
    AlcoholByVolume: number;
    alcoholImage: string;
    id: number;
};

export const FavoriteAlcholWidget: React.FC<myliketype> = ({
    AlcoholName,
    star,
    AlcoholByVolume,
    alcoholImage,
    id,
}) => {
    const StarValue = Math.round(star);
    return (
        <LinkWrap to={`/list/${id}/spec`}>
            <FavoriteAlcholBox>
                <FavoriteAlcoholImgBox>
                    <FavoriteAlcholImg src={alcoholImage} />
                </FavoriteAlcoholImgBox>
                <FavoriteAlcholLower>
                    <FavoriteAlcholNameABV>
                        <p>{AlcoholName}</p>
                        <p>
                            {AlcoholByVolume}%
                        </p>
                    </FavoriteAlcholNameABV>
                    <FavoriteAlchilStarDiv>
                        <Star
                            star={StarValue}
                            widthValue={10}
                            heightValue={10}
                        />
                    </FavoriteAlchilStarDiv>
                </FavoriteAlcholLower>
            </FavoriteAlcholBox>
        </LinkWrap>
    );
};

const LinkWrap = styled(Link)`
    text-decoration: none;
    color: #8b7e6a;
`;

const FavoriteAlcholBox = styled.div`
    width: 10.677vw;
    height: 15.260vw;
    border: 1px solid #675b4f;
    border-radius: 18px;
    margin-right: 0.706vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
        width: auto;
        height: 59.231vw;
    }
`;

const FavoriteAlcoholImgBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FavoriteAlcholImg = styled.img`
    height: 90%;
`;

const FavoriteAlcholLower = styled.div`
    width: 79.51%;

`;

const FavoriteAlcholNameABV = styled.div`
    border-bottom: 1px solid #bbb6a8;
    margin-bottom: 0.5em;
    padding-bottom: 0.5em;
    @media screen and (max-width: 767px) {
        display: flex;
        align-items: flex-end;
        font-size: 2.821vw;
    }
`;


const FavoriteAlchilStarDiv = styled.div`
    @media screen and (max-width: 767px) {
        margin-bottom: 3.103vw;
    }

`;
