import { Link, useParams } from "react-router-dom";

import { Container, DatePicker } from "./HeaderFilter.styled";

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export default function HeaderFilter() {
    const { year, month } = useParams();
    const date = new Date();
    const monthIndex = date.getMonth();
    const previousMonth = month ? month - 1 : monthIndex;
    const nextMonth = month ? Number(month) + 1 : monthIndex + 2;

    return (
        <>
            <Container>
                <Link
                    to={`/Calendar/month/${
                        year
                            ? year && previousMonth < 1
                                ? year - 1
                                : year
                            : date.getFullYear()
                    }/${previousMonth < 1 ? 12 : previousMonth}`}
                >
                    &lt;
                </Link>
                {month ? monthNames[month - 1] : monthNames[monthIndex]}&nbsp;
                {year ? year : date.getFullYear()}
                <Link
                    to={`/Calendar/month/${
                        year
                            ? year && nextMonth > 12
                                ? Number(year) + 1
                                : year
                            : date.getFullYear()
                    }/${nextMonth > 12 ? 1 : nextMonth}`}
                >
                    &gt;
                </Link>
            </Container>
            <DatePicker />
        </>
    );
}
