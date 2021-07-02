import { sagaAction } from "../utils/helper"

// Counter
export const counterIncrement = sagaAction("COUNTER_INCREMENT");
export const counterDecrement = sagaAction("COUNTER_DECREMENT");