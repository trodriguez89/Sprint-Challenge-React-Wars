import React from "react";
import styled from "styled-components";
import { Col } from 'reactstrap';


const CardDivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid #FFE81F;
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    background: white;
    transition: transform 0.2s ease-in;

    &:hover {
        color: #FFE81F;
        background-color: black;
        transform: translate(-5px) scale(1.05);
        font-weight: bold;
    }
`;

const StarWarsFontStyle = styled.h3`
    font-size: 16px;
    font-family: 'Hind', sans-serif;
`;


export default function (props) {

    return (
        <Col xs="12" s="6" md="4">
            <CardDivStyle>
                <StarWarsFontStyle>Name: {props.starWarsArray.name}</StarWarsFontStyle>
                <StarWarsFontStyle>Birthyear: {props.starWarsArray.birth_year}</StarWarsFontStyle>
                <StarWarsFontStyle>Gender: {props.starWarsArray.gender}</StarWarsFontStyle>
                <StarWarsFontStyle>Hair Color: {props.starWarsArray.hair_color}</StarWarsFontStyle>
            </CardDivStyle>
        </Col>
    );
}

