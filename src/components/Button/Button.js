import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import css from './Button.scss';

export default class Button extends React.Component {

  render() {
    const {
      text,
      onClick,
      disable
    } = this.props;

    const rootClassnames = classNames(
      css.root,
      {[css.disable]: disable}
    );

    return (
      <button
        className={rootClassnames}
        onClick={onClick}
        disabled={disable}
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disable: PropTypes.bool
};
