import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { getPrice } from '../../reducers';
import Header from './Header.js';
import css from './MainHeader.scss';

class MainHeader extends React.Component {

  incrementCounter = () => {
    this.props.incrementCounterAction();
  }

  decrementCounter = () => {
    this.props.decrementCounterAction();
  }

  render() {
    const {
      counter,
      price,
      scrollFunc
    } = this.props;

    const priceString = price.toString();
    const priceStringLength = priceString.length/3;
    let formatedPrice = `${priceString.substring(0,2)} ${priceString.substr(-3)}`;

    if (priceStringLength === 2) {
      formatedPrice = `${priceString.substring(0,3)} ${priceString.substr(-3)}`;
    }

    if (priceStringLength > 2) {
      formatedPrice = `${priceString.substring(0,1)} ${priceString.substring(1,4)} ${priceString.substr(-3)}`;
    }

    const counterPlusClassnames = classNames(css.counter, css.counterPlus);
    const counterMinusClassnames = classNames(css.counter, css.counterMinus);

    return (
     <div className={css.root}>
        <div className={css.wrapper}>
           <div className={css.price}> { formatedPrice } </div>
           <div className={css.counterWrapper}>
             <div className={counterMinusClassnames} onClick={this.decrementCounter}>
             </div>
             { counter }
             <div className={counterPlusClassnames} onClick={this.incrementCounter}>
             </div>
           </div>
         </div>
          <div className={css.link} onClick={scrollFunc}>Заполнитe форму</div>
      </div>);
  }
}

const mapStateToProps = state => ({
  counter: state.amount,
  price: getPrice(state)
});

MainHeader.propTypes = {
  scrollFunc: PropTypes.func
};

export default connect(mapStateToProps, actions)(MainHeader);
