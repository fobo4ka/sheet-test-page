const defaultState = {
  amount: 1,
  price: 29900,
  name: '',
  phone: '',
  delivery_type: 'courier',
  payment_type: '',
  successOrder: null
};

const defaultPrice = 29900;

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        amount: state.amount + 1
      }
    case 'DECREMENT_COUNTER':
      return {
        ...state,
        amount: state.amount - 1
      }
    case 'ADD_ORDER':
      return {
        ...state,
        name: action.params.name,
        phone: action.params.phone,
        delivery_type: action.params.delivery_type,
        payment_type: action.params.payment_type,
        successOrder: action.params.successOrder
      }

    case 'REMOVE_ORDER':
      return {...state,
        amount: action.amount,
        price: action.price,
        name: action.name,
        phone: action.phone,
        delivery_type: action.delivery_type,
        payment_type: action.payment_type,
      }

    default:
      return state
  }
}

export const getPrice = state => defaultPrice * state.amount;
