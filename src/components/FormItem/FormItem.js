import React, { PropTypes, Component } from 'react';
import RadioInput from '../RadioInput/RadioInput.js';
import classNames from 'classnames';
import css from './FormItem.scss';

export default class FormItem extends React.Component {

  render() {
    const {
      label,
      img,
      bigIcon,
      onClick,
      checked
    } = this.props;

    const imgClassnames = classNames(
      css.icon,
      {
        [css.bigIcon]: bigIcon,
        [css.checked]: checked
      });

    return (
      <div className={css.root} onClick={onClick}>
        <img className={imgClassnames} src={img} />
        <div className={css.inputWrapper}>
          <RadioInput label={label} checked={checked}/>
        </div>
      </div>
    );
  }
}

FormItem.propTypes = {
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  bigIcon: PropTypes.bool,
  onClick:PropTypes.func,
  checked: PropTypes.bool
};
