import { Link, useNavigate, useParams } from "react-router-dom";

import { MONTHS } from "constants";
import { Container, Border, InputMonth } from "./HeaderFilter.styled";

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
            `month/${e.target.value.slice(0, 4)}/${Number(
                e.target.value.slice(5, 7)
            ).toString()}`
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
                {month ? MONTHS[month - 1] : MONTHS[monthIndex]}&nbsp;
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
