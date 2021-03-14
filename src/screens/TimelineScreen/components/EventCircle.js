import React, { useState } from 'react';
import styled from 'styled-components';
import { EventDetailsPopup } from './EventDetailsPopup'

const Event = styled.div`
font-size: 22px;
border-radius: 90px;
background-color: ${({ color }) => color};
height: 50px;
width: 50px;
margin-top: ${({ index }) => index % 2 === 0 ? '68px' : 'calc(-105px - 1vmin)'};
position: absolute;
display: flex;
justify-content: center;
align-items: center;
transition-property: ${({ state }) => state};
transition-duration: 4s;
transition-delay: 3s;
z-index: ${({ withinYear }) => withinYear + 1};
margin-left: ${({ margin }) => `${margin}px`};
`

export const EventCircle = (props) => {
    const [isVisible, setVisible] = useState(false);
    const { event, eventsAmount, withinYear, index, color, isExpanded } = props;
    const calculateMargin = -eventsAmount * 18 + withinYear * (isExpanded ? 100 : 36);

    const onEventClicked = () => {
        if (!isVisible && (eventsAmount < 1 || isExpanded)) setVisible(true)
    }

    const onClosePopup = () => {
        setVisible(false);
    }

    return (
        <Event
            index={index}
            withinYear={withinYear}
            color={color}
            state={isVisible}
            margin={calculateMargin}
            onClick={onEventClicked}
        >
            <img src={event.icon} width="32" height="32" />
            {isVisible &&
                <EventDetailsPopup
                    event={event}
                    index={index}
                    onClosePopup={onClosePopup} />
            }
        </Event>
    )
}