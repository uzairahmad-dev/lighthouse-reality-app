import { configureStore } from '@reduxjs/toolkit';

import SellDetailsReducer from './SellDetails/SellDetailsSlice';

export const store = configureStore({
    reducer: {
        sellDetails: SellDetailsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
