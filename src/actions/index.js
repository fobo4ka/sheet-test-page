export const incrementCounter = () => ({
  type: 'INCREMENT_COUNTER'
});

export const decrementCounter = () => ({
  type: 'DECREMENT_COUNTER',
});

export const addOrder = (params) => ({
  type: 'ADD_ORDER',
  params
});

export const removeOrder = () => ({
  type: 'REMOVE_ORDER',
    amount: 1,
    price: 29900,
    name: '',
    phone: '',
    delivery_type: '',
    payment_type: '',
});

export const incrementCounterAction = (params) => {
  return (dispatch, getState) => {
    const store = getState();
    if (store.amount < 100) {
      return dispatch(incrementCounter());
    }
  };
};

export const decrementCounterAction = (params) => {
  return (dispatch, getState) => {
    const store = getState();
    if (store.amount > 1) {
      return dispatch(decrementCounter());
    }
  };
};

export const addAction = (params) => {
  return (dispatch, getState) => {
    const store = getState();
    params.successOrder = !store.successOrder;
    return pseudoAsyncGet(dispatch(addOrder(params)), store.successOrder);
  };
};

export const pseudoAsyncGet = (params, successOrder) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({...params, successOrder: !successOrder});
    }, 1000);
  });
  return promise;
};

export const removeAction = () => {
  return (dispatch, getState) => {
    return (dispatch(removeOrder({
      amount: 1,
      price: 29900,
      name: '',
      phone: '',
      delivery_type: '',
      payment_type: '',
    }))
  )};
};
