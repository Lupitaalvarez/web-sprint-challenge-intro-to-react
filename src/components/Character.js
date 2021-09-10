// Write your Character component here

import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    background-color: lightblue;
    color: black;
    opacity:0.6
`

const StyledName = styled.h2`
    color: teal;
    border-style: outset;
`

const Character = (props) => {
const {data}=props
    return (
        <StyledCharacter>
            <div className='name'>
                <StyledName>{data.name}</StyledName>
            </div>
        <div className='info'>
            <p>Height: {data.height}</p>
            <p>Mass: {data.mass}</p>
            <p>Hair color: {data.hair_color}</p>
            <p>Skin Color: {data.skin_color}</p>
            <p>Birth Year: {data.birth_year}</p>
            <p>Eye Color: {data.eye_color}</p>
            <p>Birth Year: {data.birth_year}</p>
            <p>Gender: {data.gender}</p>
        </div>
        </StyledCharacter>
    )
 }

 export default Character;