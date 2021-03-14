import React from 'react';
import styled from 'styled-components';
import events from '../../events.json'
import { YearOnTimeline } from './components/YearOnTimeline'

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
height: 100vh;
width: 100vw;
padding-left: 30px;
padding-right: 30px;
justify-content: center;
`;

const sortedEvents = events.sort((a, b) =>
    new Date(a.date).getTime() - new Date(b.date).getTime());

const uniqueYears = [... new Set(sortedEvents.map((event) =>
    new Date(event.date).getFullYear()
))];

const yearsWithEvents = uniqueYears.map((year) => {
    return {
        year: year,
        events: [...sortedEvents.filter((event) => year === new Date(event.date).getFullYear())]
    }
});

export const TimelineScreen = () => (
    <Container>
        {yearsWithEvents && yearsWithEvents.map((year, index) => (
            <YearOnTimeline data={year} index={index % 6} />
        ))}
    </Container>
);

