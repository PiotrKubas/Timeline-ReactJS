import React from 'react';
import styled from 'styled-components';

const Year = styled.div`
justify-self: center;
font-size: 22px;
font-weight: bold;
color: ${({ color }) => color};
margin-top: ${({ index }) => index % 2 === 0 ? 'calc(-30px - 1vmin)' : '0px'};
margin-bottom: ${({ index }) => index % 2 === 1 ? 'calc(20px + 1vmin)' : '0px'};
position: absolute; 
`

export const YearDisplay = ({ yearData, index, color }) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Year index={index} color={color}>{yearData}</Year>
    </div>
)