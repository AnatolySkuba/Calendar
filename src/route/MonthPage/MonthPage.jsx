import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Cell from "component/Cell";
import { changeStore } from "store/events/eventsSlice";
import { getEvents, getStore } from "store/events/eventsSelectors";
import { useGetEventsQuery } from "store/events/eventsApi"; // REST API
import { WEEK_DAYS } from "constants";
import { Container, Box, ButtonLocal, ButtonAPI } from "./MonthPage.styled";

export default function MonthPage() {
    const dispatch = useDispatch();
    const { data } = useGetEventsQuery(); // REST API
    const { year, month } = useParams();
    const events = useSelector(getEvents);
    const store = useSelector(getStore);
    const date = new Date();
    const currentYear = year ? year : date.getFullYear();
    const currentMonth = month ? month : date.getMonth() + 1;

    const currentDay =
        ((Number(year) === date.getFullYear() || !year) &&
            Number(month) === date.getMonth() + 1) ||
        !month
            ? date.getDate()
            : null;

    const previousMonthDays =
        33 -
        new Date(
            currentYear,
            month ? month - 2 : date.getMonth(),
            33
        ).getDate();

    const monthDays =
        33 -
        new Date(
            currentYear,
            month ? month - 1 : date.getMonth(),
            33
        ).getDate();

    const weekDayFirst = new Date(
        currentYear,
        month ? month - 1 : date.getMonth(),
        1
    ).getDay();

    const previousMonthFirstDay =
        previousMonthDays - (weekDayFirst === 0 ? 7 : weekDayFirst) + 2;

    const quantityCells =
        (weekDayFirst === 0 ? 7 : weekDayFirst) + monthDays > 36 ? 42 : 35;

    const cells = [];

    function switchStore(newStore) {
        newStore !== store && dispatch(changeStore(newStore));
    }

    function cell(day, anotherMonth) {
        if (store === "Local") {
            return {
                day,
                weekDay:
                    WEEK_DAYS[
                        new Date(
                            currentYear,
                            month ? month - 1 + anotherMonth : date.getMonth(),
                            day
                        ).getDay()
                    ],
                anotherMonth,
                events: events.filter(
                    ({ date }) =>
                        date.slice(0, 4) === currentYear.toString() &&
                        Number(date.slice(5, 7)).toString() ===
                            currentMonth.toString() &&
                        Number(date.slice(8, 10)) === day
                ),
            };
        } else {
            return {
                day,
                weekDay:
                    WEEK_DAYS[
                        new Date(
                            currentYear,
                            month ? month - 1 + anotherMonth : date.getMonth(),
                            day
                        ).getDay()
                    ],
                anotherMonth,
                events: data?.data.filter(
                    ({ date }) =>
                        date.slice(0, 4) === currentYear.toString() &&
                        Number(date.slice(5, 7)).toString() ===
                            currentMonth.toString() &&
                        Number(date.slice(8, 10)) === day
                ),
            };
        }
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
        <>
            <Container quantityCells={quantityCells}>
                {cells.map(({ day, weekDay, anotherMonth, events }, index) => (
                    <Cell
                        key={index}
                        day={day}
                        weekDay={weekDay}
                        anotherMonth={anotherMonth}
                        currentDay={currentDay}
                        events={events}
                    />
                ))}
            </Container>

            <Box>
                <ButtonLocal onClick={() => switchStore("Local")} store={store}>
                    LocalStorage
                </ButtonLocal>
                <ButtonAPI onClick={() => switchStore("API")} store={store}>
                    REST API
                </ButtonAPI>
            </Box>
        </>
    );
}
