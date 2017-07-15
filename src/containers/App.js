import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { withRouter } from 'react-router';
import Header from './Header/Header.js';
import Form from './Form/Form.js';
import css from './App.scss';

class App extends React.Component {

  scrollToForm = () => {
    scrollToComponent(this.Main, { offset: -48, align: 'top', duration: 500, ease:'inCirc'});
  }

  render() {
    const {
      header,
      main
    } = this.props;

    return (
     <div  className={css.container}>
        <header className={css.header}>
          <Header />
          {header ? React.cloneElement(header, {scrollFunc: this.scrollToForm}) : ''}
        </header>
        <main className={css.main} ref={(component) => {this.Main = component}}>
          {main}
        </main>
      </div>);
  }
}

export default withRouter(App);
