import {
    PANEL_VIEW, SELECTED_PANEL_VIEW,
    INCREMENT, DECREMENT,
    START_LOADING, STOP_LOADING,
    GET_ORDER_PENDING, GET_ORDER_COMPLETED, 
    GET_ORDER_DETAIL_BY_ID, SET_ORDER_DETAIL_ITEM_CHECKED
} from '../utils/constants';

export const INITIAL_STATE = {
    count: 0,
    isLoading: false,
    selectedView: PANEL_VIEW.PENDING,
    pendingOrders: [],
    completedOrders: [],
    orderDetail: {}
};

const orderReducer = function(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
    case START_LOADING:
        return {
            ...state,
            isLoading: true
        }
    case STOP_LOADING:
        return {
            ...state,
            isLoading: false
        }
    case SELECTED_PANEL_VIEW:
        return {
            ...state,
            selectedView: payload
        }
    case GET_ORDER_PENDING:
        return {
            ...state, 
            pendingOrders: payload
        };
    case GET_ORDER_COMPLETED:
        return {
            ...state,
            completedOrders: payload
        };
    case GET_ORDER_DETAIL_BY_ID:
        return {
            ...state,
            orderDetail: payload
        };
    case SET_ORDER_DETAIL_ITEM_CHECKED:
        return {
            ...state,
            orderDetail: {
                ...state.orderDetail,
                products: payload
            }
        }
    case INCREMENT:
        return {
            ...state,
            count: state.count + 1
        }
    case DECREMENT:
        return {
            ...state,
            count: state.count - 1
        }
    default:
        return state;
    }
}

export default orderReducer;