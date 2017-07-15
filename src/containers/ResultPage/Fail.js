import React from 'react';
import ResultPage from './ResultPage.js';
import { withRouter } from 'react-router';

class Fail extends React.Component {

  onClickBtn = () => {
    this.props.router.push('/');
  }

  render() {
    const params = {
      layout: 'fail',
      head: 'Извините',
      text: 'Что-то пошло не так, и нам не удалось оформить заказ.',
      btnText: 'Повторить',
      btnClick: this.onClickBtn
    };
    return (
     <ResultPage {...params} />
   );
  }
}


export default withRouter(Fail);
