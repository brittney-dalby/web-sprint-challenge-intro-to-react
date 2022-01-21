// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
import Details from './Details'

//styled Components

const Container = styled.div`
  background-color: lightgrey;
  color: black;
  max-width: 100%;
  border: 1px solid black;
  border-radius: 3px;
  margin: 16px;
  padding: 16, 0, 12, 0;
  display: flex;
  justify-content: space-evenly;
  background-repeat: repeat-x;
`;

const Div = styled.div`
  width: 100%;
`;

//Components
const Character = (props) => {
    const character = props.character;

    const [detail, setDetail] =useState(null);
    const openDetails = (id)=> {
        setDetail(id);
    };
    const closeDetails = ()=> {
        setDetail(null);
    };

    return (
        <Div>
            <Container onClick={() => setDetail(character)}>
                <h2>{character.name}</h2>
                <h2> {character.birth_year} </h2>
            </Container>
            {detail && <Details people={detail} close={closeDetails} />}
        </Div>
    );
};
export default Character;


