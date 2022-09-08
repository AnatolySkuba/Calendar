import Event from "component/Event";
import { Container, Box, Text } from "./Cell.styled";

export default function Cell({
    day,
    weekDay,
    anotherMonth,
    currentDay,
    events,
}) {
    const colorDay = currentDay === day ? true : null;

    return (
        <Container anotherMonth={anotherMonth} colorDay={colorDay}>
            <Box>
                <Text>{day}</Text>
                <Text>{weekDay}</Text>
            </Box>
            <ul>
                {events.map((event, index) => (
                    <Event key={index} event={event}></Event>
                ))}
            </ul>
        </Container>
    );
}
