import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CompStates {
  selectedOption: string;
  discountCode: string;
  note: string;
}

const initialState: CompStates = {
  selectedOption: '',
  discountCode: '',
  note: '',
};

const slice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
    setDiscountCode: (state, action: PayloadAction<string>) => {
      state.discountCode = action.payload;
    },
    setNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload;
    },
    generateDiscountCode: (state) => {
      state.discountCode = 'JAXQKE871';
    },
  },
});

export const { setOption, setDiscountCode, setNote, generateDiscountCode } = slice.actions;

export default slice.reducer;
