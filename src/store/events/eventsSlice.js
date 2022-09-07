import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
    name: "events",
    initialState: {
        events: [],
    },
    reducers: {
        changeEvents(state, action) {
            state.events = action.payload;
        },
    },
});

export const { changeEvents } = eventsSlice.actions;
