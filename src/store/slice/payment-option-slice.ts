import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for bank items
export interface BankI {
  name: string;
  icon: string;
  id: number;
}

interface PaymentState {
  mapLists: BankI[];
  selectedBankName: string | null;
}
const initialState: PaymentState = {
  mapLists: [],
  selectedBankName: null,
};

const bankSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {
    setBankList(state, action: PayloadAction<BankI[]>) {
      state.mapLists = action.payload;
    },
    selectedBank(state, action: PayloadAction<number>) {
      const selectedBank = state.mapLists.find(
        (item) => item.id === action.payload
      );
      state.selectedBankName = selectedBank ? selectedBank.name : null;
    },
  },
});

export const { setBankList, selectedBank } = bankSlice.actions;
export default bankSlice.reducer;
