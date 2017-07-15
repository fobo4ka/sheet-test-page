import React, { PropTypes, Component } from 'react';
import Animation from '../../components/Animation/Animation.js';
import classNames from 'classnames';
import css from './Header.scss';

const animationDuration = 4000;
const imageWidth = 1920;
const imageHeight = 1080;
const numOfImages = 45;

class Header extends React.Component {

  render() {
    return (
     <div className={css.root}>
        <h1 className={css.head}>Заказ теста Атлас</h1>
        <div className={css.gentest}>
          <Animation />
        </div>
      </div>
    );
  }
}

export default Header;
