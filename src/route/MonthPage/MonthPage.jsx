import { useParams } from "react-router-dom";

import Cell from "component/Cell";
import { Container } from "./MonthPage.styled";

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function MonthPage() {
    const { year, month } = useParams();
    const date = new Date();

    const currentDay =
        ((Number(year) === date.getFullYear() || !year) &&
            Number(month) === date.getMonth() + 1) ||
        !month
            ? date.getDate()
            : null;

    const previousMonthDays =
        33 -
        new Date(
            year ? year : date.getFullYear(),
            month ? month - 2 : date.getMonth(),
            33
        ).getDate();

    const monthDays =
        33 -
        new Date(
            year ? year : date.getFullYear(),
            month ? month - 1 : date.getMonth(),
            33
        ).getDate();

    const weekDayFirst = new Date(
        year ? year : date.getFullYear(),
        month ? month - 1 : date.getMonth(),
        1
    ).getDay();

    const previousMonthFirstDay =
        previousMonthDays - (weekDayFirst === 0 ? 7 : weekDayFirst) + 2;

    const quantityCells =
        (weekDayFirst === 0 ? 7 : weekDayFirst) + monthDays > 36 ? 42 : 35;

    const cells = [];

    function cell(day, anotherMonth) {
        return {
            day,
            weekDay:
                weekDays[
                    new Date(
                        year ? year : date.getFullYear(),
                        month ? month - 1 + anotherMonth : date.getMonth(),
                        day
                    ).getDay()
                ],
            anotherMonth,
        };
    }

    for (let i = 1; i <= quantityCells; i += 1) {
        if (weekDayFirst === 1 && i <= monthDays) {
            cells.push(cell(i, 0));
        }

        if (
            weekDayFirst !== 1 &&
            i + previousMonthFirstDay - 1 <= previousMonthDays
        ) {
            cells.push(cell(i + previousMonthFirstDay - 1, -1));
        } else if (weekDayFirst === 0 && i <= monthDays + 6) {
            cells.push(cell(i - 6, 0));
        } else if (weekDayFirst !== 1 && i <= monthDays + weekDayFirst - 1) {
            cells.push(cell(i - weekDayFirst + 1, 0));
        } else if (weekDayFirst === 0 && i > monthDays + 6) {
            cells.push(cell(i - monthDays - 6, 1));
        } else if (i > monthDays) {
            cells.push(cell(i - monthDays - weekDayFirst + 1, 1));
        }
    }

    return (
        <Container quantityCells={quantityCells}>
            {cells.map(({ day, weekDay, anotherMonth }, index) => (
                <Cell
                    key={index}
                    day={day}
                    weekDay={weekDay}
                    anotherMonth={anotherMonth}
                    currentDay={currentDay}
                />
            ))}
        </Container>
    );
}
