import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { getPrice } from '../../reducers';
import { withRouter } from 'react-router';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import FormItem from '../../components/FormItem/FormItem.js';
import Button from '../../components/Button/Button.js';
import classNames from 'classnames';
import css from './Form.scss';

class Form extends React.Component {

  state = {
    isdisableButton: true,
    name: this.props.name,
    phone: this.props.phone,
    deliveryType: this.props.deliveryType,
    paymentType: this.props.paymentType,
    delivery: [
      {
        type: 'courier',
        label: 'Курьером',
        img: '/images/icons/car.svg',
        checked: false,
        bigIcon: false

      }, {
        type: 'pickup',
        label: 'Самовывоз',
        img: '/images/icons/bag.svg',
        checked: false,
        bigIcon: true
      }
    ],
    payment: [
      {
        type: 'card',
        label: 'Картой',
        img: '/images/icons/card.svg',
        checked: false,
        bigIcon: false

      }, {
        type: 'cash',
        label: 'Наличными',
        img: '/images/icons/cash.svg',
        checked: false,
        bigIcon: false
      }
    ]
  };

  componentWillMount = () => {
    const {
      delivery,
      payment,
      deliveryType,
      paymentType
    } = this.state;

    const deliveryOptions = this.setCheckedOption(delivery, deliveryType);
    const paymentOptions = this.setCheckedOption(payment, paymentType);

    this.setState({
      deliveryOptions,
      paymentOptions
    });
  }

  handlerChange = (type, event) => {
    const newValue = event.target.value;
    const newState = {};
    newState[type] = newValue;

    this.setState(newState);
  }

  submitButton = () => {
    const {
      name,
      phone,
      delivery,
      payment
    } = this.state;

    const deliveryType = delivery.filter(option => {
      return option.checked})[0].type;

    const paymentType = payment.filter(option => {
      return option.checked})[0].type;

    this.props.addAction({
      name: name,
      phone: phone,
      delivery_type: deliveryType,
      payment_type: paymentType,
    }).then(({successOrder}) => {
      if (successOrder) {
        this.props.router.push('/success');
      } else {
        this.props.router.push('/fail');
      }
    });
  }

  setCheckedOption = (options, type) => {
    options.filter(option => {
      return option.type === type
    }).map(option => {
      option.checked = true
      return option
    });

    return options;
  }

  toggleOptions = (optionsType, type) => {
    const options = this.state[optionsType];
    const newState = {};

    let unCheckedOptions = options.map(option => {
      option.checked = false;
      return option
    });

    unCheckedOptions = this.setCheckedOption(unCheckedOptions, type);
    newState[`${optionsType}Type`] = type;
    newState[optionsType] = unCheckedOptions;

    this.setState(newState);
  }

  createFormOptions = (type, head) => {
    const options = this.state[type];
    return (
      <div className={css.option}>
        <p className={css.head}>{ head }</p>
        <div className={css.selectItems}>
          {
            options.map((option, key) => {
              return (<FormItem
                key={key}
                label={option.label}
                img={option.img}
                bigIcon={option.bigIcon}
                checked={option.checked}
                onClick={this.toggleOptions.bind(this, type, option.type)}
              />);
            })
          }
        </div>
      </div>
    );
  }

  render() {

    const {
      isdisableButton
    } = this.state;

    const {
      name,
      phone,
      deliveryType,
      paymentType
    } = this.state;

    const DeliveryOptions = this.createFormOptions('delivery', 'Способ доставки');
    const PaymentOptions = this.createFormOptions('payment', 'Способ оплаты');
    const disableSubmitBtn = name === '' || phone === '' || paymentType === '' || deliveryType === '';
    const textClassNames = classNames(css.info, css.textHidden);

    return (

        <div className={css.root}>
          <div className={css.form}>
            <div className={css.formInputs}>
              <div className={css.formInput}>
                <CustomInput
                  inputRef={el => this.inputElement = el}
                  label="Фамилия и имя"
                  value={name}
                  type={'text'}
                  handlerChange={this.handlerChange.bind(this, 'name')}
                />
              </div>
              <div className={css.formInput}>
                <CustomInput
                  inputRef={el => this.inputElement = el}
                  label="Номер нашего телефона"
                  value={phone}
                  type={'tel'}
                  handlerChange={this.handlerChange.bind(this, 'phone')}
                />
              </div>
            </div>
            <div className={css.item}>
              <p className={textClassNames}>На почту придет отчет
                о заказе, по телефону
                с вами свяжется
                наш сотрудник!
              </p>
              <div className={css.infoIcon}></div>
              <p className={css.info}>Если вы покупаете гентест
                  в подарок, необходимо указывать
                  свои данные
              </p>
            </div>
         </div>
         <div className={css.options}>
            { DeliveryOptions }
            { PaymentOptions }
         </div>
         <div className={css.buttonWrapper}>
          <Button text={'Заказать тест'} onClick={this.submitButton} disable={disableSubmitBtn} />
         </div>
        </div>
  );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  phone: state.phone,
  deliveryType: state.delivery_type,
  paymentType: state.payment_type,
});

export default withRouter(connect(mapStateToProps, actions)(Form));
