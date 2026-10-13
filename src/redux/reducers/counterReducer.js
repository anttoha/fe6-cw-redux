import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_INCREMENT_BY_AMOUT, COUNTER_RESET } from "./constants";

const initialState = { // Описуємо всі поля, які будуть у редюсері
    value: 0,

}

export const counterReducer = (state = initialState, action) => { // Приймає ТІЛЬКИ 2 параметра
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {...state, value: state.value + 1};
        case COUNTER_DECREMENT:
            return {...state, value: state.value - 1};
        case COUNTER_INCREMENT_BY_AMOUT:
            return {...state, value: state.value + action.payload};
        case COUNTER_RESET:
            return {...state, value: 0};
        default:
            return state
    }
};