import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface sellDetailsState {
    sellOrRent: string;
    propertyType: string;
    propertyOpt: string;
    totalArea: string;
    totalRooms: string;
    totalBathrooms: string;
    address: string;
    description: string;
    sellerName: string;
    sellerEmail: string;
    sellerPhone: string;
    price: string;
    city: string;
}

const initialState: sellDetailsState = {
    sellOrRent: 'sell',
    propertyType: 'residential',
    propertyOpt: 'house',
    totalArea: '',
    totalRooms: '',
    totalBathrooms: '',
    address: '',
    description: '',
    sellerName: '',
    sellerEmail: '',
    sellerPhone: '',
    price: '',
    city: ''
};

export const sellDetailsSlice = createSlice({
    name: 'sellDetails',
    initialState,
    reducers: {
        updateCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        },
        updateBeginCardDetails: (state, action: PayloadAction<string>) => {
            state.sellOrRent = action.payload;
            state.propertyType = action.payload;
            state.propertyOpt = action.payload;
        }
    }
});

export const { updateBeginCardDetails, updateCity } = sellDetailsSlice.actions;
export default sellDetailsSlice.reducer;
