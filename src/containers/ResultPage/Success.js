import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { getPrice } from '../../reducers';
import ResultPage from './ResultPage.js';
import { withRouter } from 'react-router';

class Success extends React.Component {

  onClickBtn = () => {
    this.props.removeOrder();
    this.props.router.push('/');
  }

  render() {
    console.log(this.props.order);
    const params = {
      layout: 'success',
      head: 'Спасибо за оформление заказа',
      text: 'Через 30 секунд с вами свяжется наш сотрудник для уточнения адреса и времени доставки',
      btnText: 'Ок, жду звонка',
      btnClick: this.onClickBtn
    };

    return (
     <ResultPage {...params} />
   );
  }
}

const mapStateToProps = state => ({
  order: {
    counter: state.amount,
    price: getPrice(state),
    name: state.name,
    phone: state.phone,
    deliveryType: state.delivery_type,
    paymentType: state.payment_type,
  }
});

export default withRouter(connect(mapStateToProps, actions)(Success));
