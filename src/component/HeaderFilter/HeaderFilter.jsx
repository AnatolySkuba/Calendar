import { Link, useNavigate, useParams } from "react-router-dom";

import { Container, Border, InputMonth } from "./HeaderFilter.styled";

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
    const navigate = useNavigate();
    const date = new Date();
    const monthIndex = date.getMonth();
    const previousMonth = month ? month - 1 : monthIndex;
    const nextMonth = month ? Number(month) + 1 : monthIndex + 2;

    const handleChange = (e) => {
        e.preventDefault();
        navigate(
            `month/${e.target.value.slice(0, 4)}/${e.target.value.slice(5, 7)}`
        );
    };

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
            <InputMonth type="month" onChange={handleChange} />
            <Border />
        </>
    );
}
