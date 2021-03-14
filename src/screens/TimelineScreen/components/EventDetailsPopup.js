import React from 'react';
import styled from 'styled-components';

const Popup = styled.div`
position: absolute;
display: flex;
flex-direction: column;
height: 120px;
width: 200px;
background-color: white;
border-color: #ded3a7;
border-width: 1;
border-style: ridge;
border-radius: 15;
align-items: center;
justify-content: space-between;
margin-top: ${({ index }) => index % 2 === 0 ? '180px' : '-180px'};
`

const CloseButton = styled.button`
border-radius: 45px;
border-width: 1;
border-style: solid;
background-color: white;
height: 30px;
width: 80px;
margin-bottom: 10px;
outline: none;
`

const DescriptionText = styled.div`
font-size: 12px;
`

export const EventDetailsPopup = (props) => (
    <Popup index={props.index} className={"popup"}>
        <div>
            {props.event.title}
        </div>
        <DescriptionText>
            {props.event.description}
        </DescriptionText>
        <CloseButton
            onClick={props.onClosePopup}>
            Close
        </CloseButton>
    </Popup >


)
