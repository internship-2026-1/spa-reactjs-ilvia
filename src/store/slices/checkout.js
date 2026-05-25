import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shippingAddress: {
    fullName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  shippingMethod: {
    id: 'standard',
    label: 'Estándar',
    cost: 0,
    description: '3-5 días hábiles',
  },
  couponCode: '',
  discount: 0,
  paymentMethod: 'card',
  notes: '',
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setShippingAddress: (state, action) => {
      state.shippingAddress = {
        ...state.shippingAddress,
        ...action.payload,
      };
    },
    setShippingMethod: (state, action) => {
      state.shippingMethod = action.payload;
    },
    setCouponCode: (state, action) => {
      state.couponCode = action.payload;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    clearCheckout: () => initialState,
  },
});

export const {
  setShippingAddress,
  setShippingMethod,
  setCouponCode,
  setDiscount,
  setPaymentMethod,
  setNotes,
  clearCheckout,
} = checkoutSlice.actions;

export const selectShippingAddress = (state) => state.checkout.shippingAddress;
export const selectShippingMethod = (state) => state.checkout.shippingMethod;
export const selectCouponCode = (state) => state.checkout.couponCode;
export const selectDiscount = (state) => state.checkout.discount;
export const selectPaymentMethod = (state) => state.checkout.paymentMethod;
export const selectCheckoutNotes = (state) => state.checkout.notes;

export default checkoutSlice.reducer;
