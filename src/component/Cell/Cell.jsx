import { useState } from "react";

import Form from "component/Form";
import { Container, BackDrop, Box, Text, Event } from "./Cell.styled";

export default function Cell({
    day,
    weekDay,
    anotherMonth,
    currentDay,
    events,
}) {
    const [dropdown, setDropdown] = useState(false);
    const colorDay = currentDay === day ? true : null;

    function toggleDropdown() {
        setDropdown(!dropdown);
    }

    return (
        <>
            <Container anotherMonth={anotherMonth} colorDay={colorDay}>
                <Box>
                    <Text>{day}</Text>
                    <Text>{weekDay}</Text>
                </Box>
                <ul>
                    {events.map((event, index) => (
                        <Event key={index} onClick={toggleDropdown}>
                            {event.title}
                        </Event>
                    ))}
                </ul>
            </Container>
            <BackDrop onClick={toggleDropdown} dropdown={dropdown} />
            {dropdown && (
                <Form toggleDropdown={toggleDropdown} component={"Cell"} />
            )}
        </>
    );
}
