import React, { PropTypes, Component } from 'react';
import { withRouter } from 'react-router';
import Button from '../../components/Button/Button.js';
import { connect } from 'react-redux';
import classNames from 'classnames';
import css from './ResultPage.scss';

class ResultPage extends React.Component {

  render() {
    const {
      layout,
      head,
      text,
      btnText,
      btnClick
    } = this.props;

    const rootClassnames = classNames(
      css.root,
      {[css[layout]]: true}
    );

    return (
      <div className={rootClassnames}>
        <div className={css.icon}></div>
        <p className={css.head}>{ head }</p>
        <p className={css.text}>{ text }</p>
        <Button text={'Повторить'} onClick={btnClick} />
      </div>);
  }
}

ResultPage.propTypes = {
  layout: PropTypes.string,
  head: PropTypes.string,
  text: PropTypes.string,
  btnText: PropTypes.string,
  btnClick: PropTypes.func
};

export default withRouter(ResultPage);
