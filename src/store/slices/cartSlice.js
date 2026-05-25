import { createSlice } from '@reduxjs/toolkit'

const parsePrice = (priceStr = '') =>
  parseFloat(
    priceStr.replace(/[Q$\s]/g, '').replace(/\./g, '').replace(',', '.')
  ) || 0

const calculateTotals = (items) => {
  const totalItems = items.reduce((sum, item) => sum + (item.quantity || 0), 0)
  const total = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * (item.quantity || 0),
    0
  )
  return { totalItems, total }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0, totalItems: 0 },
  reducers: {
    addItem: (state, action) => {
      const incoming = action.payload
      const existing = state.items.find((i) => i.id === incoming.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...incoming, quantity: 1 })
      }
      const totals = calculateTotals(state.items)
      state.totalItems = totals.totalItems
      state.total = totals.total
    },
    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) {
        item.quantity += 1
        const totals = calculateTotals(state.items)
        state.totalItems = totals.totalItems
        state.total = totals.total
      }
    },
    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload)
        }
        const totals = calculateTotals(state.items)
        state.totalItems = totals.totalItems
        state.total = totals.total
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload)
      const totals = calculateTotals(state.items)
      state.totalItems = totals.totalItems
      state.total = totals.total
    },
    clearCart: (state) => {
      state.items = []
      state.totalItems = 0
      state.total = 0
    },
  },
})

export const {
  addItem,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
} = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) => state.cart.totalItems
export const selectCartSubtotal = (state) => state.cart.total

export default cartSlice.reducer
