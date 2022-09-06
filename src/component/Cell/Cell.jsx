import { Container, Text } from "./Cell.styled";

export default function Cell({ day, weekDay, anotherMonth, currentDay }) {
    const colorDay = currentDay === day ? true : null;

    return (
        <Container anotherMonth={anotherMonth} colorDay={colorDay}>
            <Text>{day}</Text>
            <Text>{weekDay}</Text>
        </Container>
    );
}
