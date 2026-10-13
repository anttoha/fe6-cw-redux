import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_INCREMENT_BY_AMOUT,
  COUNTER_RESET,
} from "./constants";

export const increment = () => ({ type: COUNTER_INCREMENT });
export const decrement = () => ({ type: COUNTER_DECREMENT });
export const incrementByAmount = (payload) => ({
  type: COUNTER_INCREMENT_BY_AMOUT,
  payload,
});
export const reset = () => ({ type: COUNTER_RESET });
