import { ADD_TO_CART } from '../actions/cartAction'

const initialState = {
    cart: []
}

export function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let updatedCart
            const foundItem = state.cart.find(item => item.id === payload.id)
            if (!foundItem) {
                updatedCart = [...state.cart, payload]
            } else {
                updatedCart = state.cart.map(item => ({
                    ...item,
                    quantity: item.id === foundItem.id ? item.quantity + 1 : item.quantity
                }))
            }
            return {
                ...state,
                cart: updatedCart
            }

        default:
            return state;
    }
}