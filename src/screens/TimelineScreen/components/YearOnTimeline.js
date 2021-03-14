import React from 'react';
import styled from 'styled-components';
import { YearDisplay } from './YearDisplay'
import { YearEvents } from './YearEvents'

const colors = ['#5b2fe6', '#932af6', '#8e3eff', '#ff0ef9', '#e020fd', '#b62afd'];

const Panel = styled.div`
min-width: calc(60px + 3vmin);
min-height: calc(20px + 1vmin);
background-color: ${(props) => colors[props.index]};
margin-right: 2px;
justify-content: center;
align-items: center;
display: flex;
`

const Circle = styled.div`
border-width: 3px;
border-style: solid;
border-color: black;
border-radius: 90px;
height: 6px;
width: 6px;
position: absolute;
`

const Line = styled.div`
height: 80px;
width: 2px;
background-color: black;
position: absolute;
z-index: 0;
margin-top: ${(props) => props.index % 2 === 0 ? '86px' : '0px'};
margin-bottom: ${(props) => props.index % 2 === 1 ? '86px' : '0px'};
`

export const YearOnTimeline = ({ data, index }) => (
    <div style={{ paddingTop: 250, paddingBottom: 250 }}>
        {index % 2 === 0 ?
            <YearDisplay
                yearData={data.year}
                index={index}
                color={colors[index]} /> :
            <YearEvents
                eventsData={data.events}
                index={index}
                color={colors[index]} />}

        <Panel index={index}>
            <Circle />
            <Line index={index} />
        </Panel>

        {index % 2 === 1 ?
            <YearDisplay
                yearData={data.year}
                index={index}
                color={colors[index]} /> :
            <YearEvents
                eventsData={data.events}
                index={index}
                color={colors[index]} />}
    </div>
);
