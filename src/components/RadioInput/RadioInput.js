import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import css from './RadioInput.scss';

export default class RadioInput extends React.Component {

  render() {
    const {
      label,
      checked
    } = this.props;

    const radioClassnames = classNames({[css.radioIcon]:true, [css.checked]: checked});

    return (
      <div className={css.root}>
        <input className={css.input} type="radio" />
        <div className={radioClassnames}></div>
        <span>{ label }</span>
      </div>
    );
  }
}

RadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool
};
