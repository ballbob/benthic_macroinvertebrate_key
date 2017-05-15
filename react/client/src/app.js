import React from 'react';
import ReactDOM from 'react-dom';
import QuestionContainer from './containers/QuestionContainer'

window.onload = function(){
  ReactDOM.render(
    <QuestionContainer />,
    document.getElementById('app')
  );
}
