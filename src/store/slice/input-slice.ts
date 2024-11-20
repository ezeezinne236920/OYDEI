import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInputState {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  country: string;
  deliveryAddress: string;
  paymentMethod: string;
  Location: string;
  deliveryOptions: string;
}
// Define the initial state with default empty values
const initialState: UserInputState = {
  name: "",
  phoneNumber: "",
  emailAddress: "",
  country: "",
  deliveryAddress: "",
  paymentMethod: "",
  Location: "",
  deliveryOptions: "",
};

// Create the slice
const userInputSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    setEmailAddress(state, action: PayloadAction<string>) {
      state.emailAddress = action.payload;
    },
    setCountry(state, action: PayloadAction<string>) {
      state.country = action.payload;
    },
    setDeliveryAddress(state, action: PayloadAction<string>) {
      state.deliveryAddress = action.payload;
    },
    setPaymentMethod(state, action: PayloadAction<string>) {
      state.paymentMethod = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.Location = action.payload;
    },
    setDeliveryOptions(state, action: PayloadAction<string>) {
      state.deliveryOptions = action.payload;
    },
  },
});

// Export the actions
export const {
  setName,
  setDeliveryOptions,
  setPaymentMethod,
  setLocation,
  setPhoneNumber,
  setEmailAddress,
  setCountry,
  setDeliveryAddress,
} = userInputSlice.actions;

// Export the reducer
export default userInputSlice.reducer;
