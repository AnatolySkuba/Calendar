import { useDispatch, useSelector } from "react-redux";

import { getEvents } from "store/events/eventsSelectors";
import { changeEvents } from "store/events/eventsSlice";
import {
    Container,
    Box,
    Header,
    IconClose,
    Label,
    Input,
    Textarea,
    InputDate,
    InputTime,
    BoxData,
    ButtonSave,
    LabelData,
    IconDelete,
} from "./Form.styled";

export default function Form({ toggleDropdown, component }) {
    const events = useSelector(getEvents);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleDropdown();
        const { title, description, date, time } = e.target;
        const newEvents = [...events];
        newEvents.push({
            title: title.value,
            description: description.value,
            data: date.value,
            time: time.value,
            currentDate: new Date().toLocaleString(),
        });
        dispatch(changeEvents(newEvents));
    };

    return (
        <Container onSubmit={handleSubmit} component={component}>
            <Box>
                <Header>
                    {component === "Cell"
                        ? "Edit idea item"
                        : "Add new idea item"}
                </Header>
                <IconClose onClick={toggleDropdown} />
            </Box>
            <Label>
                Title*
                <Input
                    type="text"
                    name="title"
                    placeholder="Title goes here"
                    required
                />
            </Label>
            <Label>
                Description
                <Textarea name="description" rows="7" />
            </Label>
            <BoxData>
                <LabelData>
                    Date
                    <InputDate
                        type="date"
                        name="date"
                        defaultValue={new Date().toLocaleDateString("en-CA")}
                        required
                        pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
                    />
                </LabelData>
                <Label>
                    Begin<br></br>time
                    <InputTime type="time" name="time" />
                </Label>
            </BoxData>
            <Box>
                <IconDelete />
                <ButtonSave>SAVE</ButtonSave>
            </Box>
        </Container>
    );
}
