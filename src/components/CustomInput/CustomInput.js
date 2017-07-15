import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import css from './CustomInput.scss';

class CustomInput extends React.Component {

  state = {
    inFocus: false
  };

  componentWillMount = () => {
    this.checkPlaceholder();
  }

  focusInput = () => {
    this.textInput.focus();
    this.setState({
      inFocus: true
    });
  }

  checkPlaceholder = () => {
    this.setState({
      inFocus: this.props.value !== ''
    });
  }

  render() {
    const {
      label,
      handlerChange,
      handleKeyDown,
      handlePaste,
      value,
      type
    } = this.props;

    const {
      inFocus
    } = this.state;

    const placeholderClassnames = classNames(
      css.placeholder,
      {[css.focus]: inFocus}
    );
    return (
       <div className={css.wrapper} onClick={this.focusInput}>
        <input
          className={css.input}
          ref={(input) => { this.textInput = input; }}
          type={type}
          onBlur={this.checkPlaceholder}
          onChange={handlerChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          value={value}
          />
        <div className={placeholderClassnames}>{label}</div>
       </div>);
  }
}

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  handlerChange: PropTypes.func,
  handleKeyDown: PropTypes.func,
  handlePaste: PropTypes.func,
  type: PropTypes.string
};

export default CustomInput;
