import { configureStore } from '@reduxjs/toolkit';

import SellDetailsReducer from './SellDetails/SellDetailsSlice';
import RealtorReducer from './Realtor/RealtorSlice';

export const store = configureStore({
    reducer: {
        sellDetails: SellDetailsReducer,
        user: RealtorReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
