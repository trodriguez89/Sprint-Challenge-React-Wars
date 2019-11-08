import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import { Container, Row } from 'reactstrap';
import styled from "styled-components";


export default function (props) {
    const [starWarsChar, setStarWarsChar] = useState([])

    useEffect(() => {
        axios.get("https://lambda-swapi.herokuapp.com/api/people/")
            .then(response => {
                console.log(response.data.results);
                setStarWarsChar(response.data.results);
            })
            .catch(error => {
                console.log("Oops, something went wrong in a galaxy far far away", error)
            })
    }, [])

    return (
        <Container>
            <Row>
                {starWarsChar.map((item, index) => {
                    return <StarWarsCard key={index} starWarsArray={item} />
                })}
            </Row>
        </Container>
    );
}

