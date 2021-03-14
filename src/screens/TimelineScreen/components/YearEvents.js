import React, { useState } from 'react';
import styled from 'styled-components';
import { EventCircle } from './EventCircle';

const EventsGroup = styled.div`
display: flex;
justify-content: center;
`

export const YearEvents = ({ eventsData, index, color }) => {

    const [isExpanded, setExpanded] = useState(false);
    const eventsAmount = eventsData.length > 1 ? eventsData.length - 1 : 0;

    const onExpand = () => {
        if (!isExpanded) {
            setExpanded(true);
            setTimeout(() => setExpanded(false), 5000);
        }
    }

    return (
        <EventsGroup onClick={() => onExpand()}>
            {eventsData.map((event, withinYear) => (
                <EventCircle
                    event={event}
                    eventsAmount={eventsAmount}
                    withinYear={withinYear}
                    index={index}
                    color={color}
                    isExpanded={isExpanded} />
            ))}
        </EventsGroup >
    )
}

