import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { eventsSlice } from "./events/eventsSlice";

const eventsPersistConfig = {
    key: "events",
    storage,
};

const eventsReducer = persistReducer(eventsPersistConfig, eventsSlice.reducer);

export const store = configureStore({
    reducer: {
        events: eventsReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    ],
});

export const persistor = persistStore(store);
